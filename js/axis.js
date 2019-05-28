let axis = {};

function detectLocator(locator) {
  if (locator.indexOf('/') === 0) return 'XPath';
  if (locator.indexOf('./') === 0) return 'XPath';
  if (locator.indexOf('(') === 0) return 'XPath';
  if (locator.indexOf('../') === 0) return 'XPath';
  if (locator.indexOf('descendant') === 0) return 'XPath';
  return 'CSS';
}

function addExamples(lines, title = 'Valid Examples:') {
  return `<br><br><h6>${title}</h6><ul>` +
    lines.map(line => `<li><code>${line}</code></li>`).join('') +
    '</ul>'
}


// Length of a string for locator
axis.length = {
  score: (locator) => {
    let length = locator.length;
    if (length < 20) return 100;
    if (length > 100) return 0;
    return 100 - (length - 20);
  },

  analyze: (score, locator) => {
    if (score > 70) return `Your locator has optimal length`;

    let tip = '<br><br>Consider adding custom unique classes, ids, or data attributes to web page to locate elements faster';

    if (score > 30) return 'Your locator is too long. The longer locator is the harder it is to read and maintain. Chained elements in it are too fragile' + tip;
    return 'Ough! This is as long as HELL! Find a way to rewrite it in a shorter manner. There is no way you can use it in your project!' + tip ;
  }
  
}

// Complexity of locator. 
// Detects usage of XPath and CSS operators
axis.simplicity = {

  score: (locator) => {
    let score = 100;
    if (detectLocator(locator) === 'XPath') {
      score += 50;
      for (let keyword of ['/', '[', 'contains', '=']) {
        let length = locator.split(keyword).length;
        score = score - Math.pow(locator.split(keyword).length - 1, 2) * 5;
      }
    }

    if (detectLocator(locator) === 'CSS') {
      for (let keyword of ['>', ' ', ':nth-child']) {
        let length = locator.split(keyword).length;
        score = score - Math.pow(locator.split(keyword).length - 1, 2) * 3;
      }
    }

    if (score > 100) return 100;
    if (score < 0) return 0;
    return score;
  },

  analyze: (score, locator) => {
    if (score > 70) return `Your locator has optimal complexity`;

    var tip = '<br><br>Consider adding custom unique classes, ids, or data attributes to web page to locate elements faster';

    if (score > 30) return 'Your locator is too complex. Maybe you could try to simplify it by refering to element by ids, or text of the element?' + tip;
    return 'WAT! Is any species in the Universe can understand this? Find a way to rewrite it in a shorter manner. There is no way you can use it in your project!' + tip ;
  }
};

// Usage of auto-generated framework classes
axis.stability = {

  score: (locator) => {
    let score = 100;
    const bootstrap = [
      'col-', 'left', 'right', 'text-center', 'text-right', 'text-left', 'pull-left', 'pull-right', 'text-muted', 'pull-', 'push-', 'clearfix'
    ];
    const others = ['ember-', 'jss', '_'];

    if (detectLocator(locator) === 'CSS') {

      for (let keyword of bootstrap) {
        let matches = locator.match(new RegExp(`\.${keyword}\\W?`, 'g'));
        if (matches) score = score - matches.length * 20;
      }

      for (let keyword of others) {
        let matches = locator.match(new RegExp(`\.${keyword}\\W?`, 'g'));
        if (matches) score = score - matches.length * 40;
      }

      score = score - (locator.split('>').length - 1) * 20; // chaining detected

      let numClasses = locator.split('.').length - 1;
      if (numClasses > 3) score -= numClasses * 7; // too many classes

    }

    if (detectLocator(locator) === 'XPath') {
      locator = locator.replace("'", '"');
      const keywords = [
        '@class="', // no direct classes
        '@class = "', // no direct classes
      ];

      for (let keyword of keywords) {
        let length = locator.split(keyword).length;
        score = score - (locator.split(keyword).length - 1) * 40;
      }

      for (let keyword of bootstrap) {
        let matches = locator.match(/@class\\s?,\\s?"${keyword}/g);
        if (matches) score = score - matches.length * 20;
      }

      for (let keyword of others) {
        let matches = locator.match(/@class\\s?,\\s?"${keyword}/g);
        if (matches) score = score - matches.length * 40
      }      

      score = score - Math.pow(locator.split(']/').length - 1, 2) * 3; // chaining detected
    }

    if (score > 100) return 100;
    if (score < 0) return 0;
    return score;      
  },

  analyze: (score, locator) => {
    if (score > 70) return `Your locator seems stable to changes`;

    var tip = '';

    let chaining = detectLocator(locator) === 'XPath' && locator.split(']/').length > 2;
    if (!chaining) chaining = detectLocator(locator) === 'CSS' && locator.split('>').length > 2;

    if (chaining) {
      tip += '<br></br> It seems you relying on exact order of elements. It\'s not recommended to do so, element\'s position in HTML may change, it can be moved away from it\'s current parent.';
    }
    if (detectLocator(locator) === 'XPath' && locator.indexOf('@class=') > 0) {
      tip += '<br></br> Ouch, use are using <code>@class=</code> statement, which will work only if you have exact set of classes and exact order in elements. If you ever add another class to an element this locator will fail. Please use "contains" function instead: <code>[contains(@class, "class-name")]</code>';
    }

    tip += '<br></br> Please also make sure you are not relying on auto-generated classes (from React/Angular/Ember) or Bootstrap classes which are used for styling (text-left, col, etc)';


    if (score > 30) return 'Your locator is fine but it may fail in a minor change of a page' + tip;
    if (score >= 0) return 'We never thought we would display this message. But you <b>ARE OVERUSING FRAGILE PARTS. Your tests will be broken on next rebuild!</b>' + tip ;  

  }
}

// Usage of unique things in locators
axis.uniqueness = {

  score: (locator) => {
    let score = 0;
    const uniqueElements = ['header','footer', 'article', 'section', 'form', 'nav', 'summary', 'aside', 'body'];
    const attributes = ['data-', 'aria-', 
      'id=', 'for=', 'name=', 'alt=', 'value=', 'src=', 'href=',
      'id = ', 'src =', 'for =', 'name =', 'alt =', 'value =', 'src =', 'href ='
    ];

    if (detectLocator(locator) === 'CSS') {
      if (locator.match(/#\w+$/)) return 100; // using ID only

      let keywords = attributes.map(a => `[${a}`);
      for (let keyword of keywords) {
        if (locator.indexOf(keyword) >= 0) score += 75;
      }

      for (let token of locator.split(/[\s.\>]+/)) {
        if (uniqueElements.includes(token)) score += 25;
      }

      for (let keyword of ['.test-', '.lc-']) { // special classes
        if (locator.indexOf(keyword) >= 0) score += 100;
      }          

      let numClasses = locator.split('.').length - 1; 
      score += numClasses * 10;
    }

    if (detectLocator(locator) === 'XPath') {
      if (locator.match(/#\w+$/)) return 100; // using ID only

      let keywords = attributes.map(a => `@${a}`);
      keywords.push('contains(');
      keywords.push('[normalize-space(.)=');
      keywords.push('[.=');

      for (let keyword of keywords) {
        if (locator.indexOf(keyword) >= 0) score += 75;
      }

      for (let token of locator.split(/[\/\.\[>]+/)) {
        if (uniqueElements.includes(token)) score += 25;
      }
    }

    if (score > 100) return 100;
    if (score < 0) return 0;
    return score;      
  },

  analyze: (score, locator) => {
    if (score > 70) return `We didn't try it, but your locator looks very nice!`;

    var tip = '<br><br>We recommend either to rely on element IDs, text content, data attributes, accessibility attributes, etc.';
    tip += 'Try to add special class names into the application and rely on them. You may also use accessibility attributes';

    let examples = [
      'footer',
      '#user-login',
      '//button[contains(text(),"Login")]',
      'div[aria-label="Login"]',
    ];

    tip += addExamples(examples);

    if (score > 30) return 'It\'s not the best locator but seems fine.'+ tip;
    if (score >= 0) return 'Maybe it works for you but it could be better. No unqiue part in this locator detected' + tip ;  

  }
}


window.axis = axis;