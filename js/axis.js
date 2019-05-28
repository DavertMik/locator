let axis = {};

const bootstrap = [
  'left', 'right', 'text-center', 'text-right', 'text-left', 'pull-left', 'pull-right', 'text-muted', 'pull-', 'push-', 'clearfix', 'align-baseline','align-bottom','align-middle','align-top','align-text-top','align-text-bottom','align-content-around', 'align-content-center', 'align-content-end', 'align-content-start', 'align-content-stretch', 'align-items-start', 'align-items-end', 'align-items-center', 'align-items-baseline', 'align-items-stretch', 'align-self-start', 'align-self-end', 'align-self-center', 'align-self-baseline', 'align-self-stretch', 'border','border-bottom-0','border-danger','border-dark','border-info','border-left-0','border-lg','border-light','border-primary','border-right-0','border-top-0','border-secondary','border-sm','border-success','border-warning','border-white','border-0', 'clearfix', 'custom-checkbox','custom-control','custom-control-input','custom-control-inline','custom-control-label','custom-file','custom-radio','custom-range','custom-select','custom-select-lg','custom-select-sm','custom-switch', 'd-block', 'd-flex', 'd-inline-flex', 'embed-responsive','embed-responsive-16by9','embed-responsive-3by4','embed-responsive-item', 'fixed-bottom','fixed-top','flex-column', 'flex-column-reverse', 'flex-fill', 'flex-grow-1','flex-grow-1','flex-nowrap','flex-*-nowrap','flex-shrink-0|1','flex-row','flex-*-row','flex-row-reverse','flex-*-row-reverse','flex-wrap','flex-*-wrap','flex-wrap-reverse','flex-*-wrap-reverse','float-left','float-*-left','float-none','float-right','float-*-right','font-italic','font-weight-bold','font-weight-bolder','font-weight-light','font-weight-lighter','font-weight-normal','form-check','form-check-inline','form-check-input','form-check-label','form-control','form-control-file','form-control-lg','form-control-plaintext','form-control-range','form-control-sm','form-group','form-inline', 'h-25','h-50','h-75','h-100','img-fluid', 'justify-content-*','justify-content-*-around','justify-content-*-between','justify-content-*-center','justify-content-*-end','justify-content-*-start','lead', 'no-gutters', 'pre-scrollable', 'rounded','rounded-bottom','rounded-circle','rounded-left','rounded-right','rounded-top','rounded-0','row','shadow','shadow-lg','shadow-md','shadow-none','shadow-sm', 'p-1','p-2','p-3','p-4', 'pb-1','pb-2','pb-3','pb-4', 'pt-1','pt-2','pt-3','pt-4', 'pl-1','pl-2','pl-3','pl-4', 'pr-1','pr-2','pr-3','pr-4', 'px-1','px-2','px-3','px-4', 'py-1','py-2','py-3','py-4', 'm-1','m-2','m-3','m-4', 'mb-1','mb-2','mb-3','mb-4', 'mt-1','mt-2','mt-3','mt-4', 'ml-1','ml-2','ml-3','ml-4', 'mr-1','mr-2','mr-3','mr-4', 'mx-1','mx-2','mx-3','mx-4', 'my-1','my-2','my-3','my-4', 'text-break','text-capitalize','text-center', 'text-reset','text-right','text-*-right','text-success','text-uppercase', 'w-25','w-50','w-75','w-100',   'col-lg-12',   'col-xs-11',   'col-xs-1',   'col-xs-2',   'col-xs-3',   'col-xs-4',   'col-xs-5',   'col-xs-6',   'col-xs-7',   'col-xs-8',   'col-xs-9',   'col-xs-10',   'col-xs-12',   'col-sm-11',   'col-sm-1',   'col-sm-2',   'col-sm-3',   'col-sm-4',   'col-sm-5',   'col-sm-6',   'col-sm-7',   'col-sm-8',   'col-sm-9',   'col-sm-10',   'col-sm-12',   'col-sm-push-1',   'col-sm-push-2',   'col-sm-push-3',   'col-sm-push-4',   'col-sm-push-5',   'col-sm-push-6',   'col-sm-push-7',   'col-sm-push-8',   'col-sm-push-9',   'col-sm-push-10',   'col-sm-push-11',   'col-sm-pull-1',   'col-sm-pull-2',   'col-sm-pull-3',   'col-sm-pull-4',   'col-sm-pull-5',   'col-sm-pull-6',   'col-sm-pull-7',   'col-sm-pull-8',   'col-sm-pull-9',   'col-sm-pull-10',   'col-sm-pull-11',   'col-sm-offset-1',   'col-sm-offset-2',   'col-sm-offset-3',   'col-sm-offset-4',   'col-sm-offset-5',   'col-sm-offset-6',   'col-sm-offset-7',   'col-sm-offset-8',   'col-sm-offset-9',   'col-sm-offset-10',   'col-sm-offset-11',   'col-md-11',   'col-md-1',   'col-md-2',   'col-md-3',   'col-md-4',   'col-md-5',   'col-md-6',   'col-md-7',   'col-md-8',   'col-md-9',   'col-md-10',   'col-md-12',   'col-md-push-0',   'col-md-push-1',   'col-md-push-2',   'col-md-push-3',   'col-md-push-4',   'col-md-push-5',   'col-md-push-6',   'col-md-push-7',   'col-md-push-8',   'col-md-push-9',   'col-md-push-10',   'col-md-push-11',   'col-md-pull-0',   'col-md-pull-1',   'col-md-pull-2',   'col-md-pull-3',   'col-md-pull-4',   'col-md-pull-5',   'col-md-pull-6',   'col-md-pull-7',   'col-md-pull-8',   'col-md-pull-9',   'col-md-pull-10',   'col-md-pull-11',   'col-md-offset-0',   'col-md-offset-1',   'col-md-offset-2',   'col-md-offset-3',   'col-md-offset-4',   'col-md-offset-5',   'col-md-offset-6',   'col-md-offset-7',   'col-md-offset-8',   'col-md-offset-9',   'col-md-offset-10',   'col-md-offset-11',   'col-lg-11',   'col-lg-1',   'col-lg-2',   'col-lg-3',   'col-lg-4',   'col-lg-5',   'col-lg-6',   'col-lg-7',   'col-lg-8',   'col-lg-9',   'col-lg-10',   'col-lg-push-0',   'col-lg-push-1',   'col-lg-push-2',   'col-lg-push-3',   'col-lg-push-4',   'col-lg-push-5',   'col-lg-push-6',   'col-lg-push-7',   'col-lg-push-8',   'col-lg-push-9',   'col-lg-push-10',   'col-lg-push-11',   'col-lg-pull-0',   'col-lg-pull-1',   'col-lg-pull-2',   'col-lg-pull-3',   'col-lg-pull-4',   'col-lg-pull-5',   'col-lg-pull-6',   'col-lg-pull-7',   'col-lg-pull-8',   'col-lg-pull-9',   'col-lg-pull-10',   'col-lg-pull-11',   'col-lg-offset-0',   'col-lg-offset-1',   'col-lg-offset-2',   'col-lg-offset-3',   'col-lg-offset-4',   'col-lg-offset-5',   'col-lg-offset-6',   'col-lg-offset-7',   'col-lg-offset-8',   'col-lg-offset-9',   'col-lg-offset-10',   'col-lg-offset-11',
];

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

    const others = ['ember-', 'jss', '_', 'ng-'];

    if (detectLocator(locator) === 'CSS') {

      for (let keyword of bootstrap) {
        let matches = locator.match(new RegExp(`\\.${keyword}\\W?`, 'g'));
        if (matches) score = score - matches.length * 20;
      }

      for (let keyword of others) {
        let matches = locator.match(new RegExp(`\\.${keyword}\\W?`, 'g'));
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

    let tip = '';
    let isCSS = detectLocator(locator) === 'CSS';
    let isXPath = detectLocator(locator) === 'XPath';

    let chaining = isXPath && locator.split(']/').length > 2;
    if (!chaining) chaining = isCSS && locator.split('>').length > 2;

    if (chaining) {
      tip += '<br></br> It seems you relying on exact order of elements. It\'s not recommended to do so, element\'s position in HTML may change, it can be moved away from it\'s current parent.';
    }
    if (isXPath && locator.indexOf('@class=') > 0) {
      tip += '<br></br> Ouch, you are using <code>@class=</code> statement, which will work only if you have exact set of classes and exact order in elements. If you ever add another class to an element this locator will fail. Please use "contains" function instead: <code>[contains(@class, "class-name")]</code>';
    }

    if (isCSS) {
      for (let token of locator.split(/[\s\.\\[>]+/)) {
        if (bootstrap.includes(token)) {
          tip += "<br><br>You are using Bootstrap classes which were introduced for styling only!"
          break;
        }
      }      
    }


    tip += '<br></br> Please also make sure you are not relying on auto-generated classes (from React/Angular/Ember)';


    if (score > 30) return 'Your locator is fine but it may fail in a minor change of a page' + tip;
    if (score >= 0) return 'We never thought we would display this message. But you <b>ARE OVERUSING FRAGILE PARTS. Your tests will be broken on next rebuild!</b>' + tip ;  

  }
}

// Usage of unique things in locators
axis.uniqueness = {

  score: (locator) => {
    let score = 0;
    const uniqueElements = ['header','footer', 'article', 'section', 'form', 'nav', 'summary', 'aside', 'body', 'button', 'input', 'select'];
    const attributes = ['data-', 'aria-', 
      'id=', 'for=', 'name=', 'alt=', 'value=', 'src=', 'href=',
      'id = ', 'src =', 'for =', 'name =', 'alt =', 'value =', 'src =', 'href ='
    ];

    if (detectLocator(locator) === 'CSS') {
      if (locator.match(/#[\w-_\s]+$/)) return 100; // using ID only

      let keywords = attributes.map(a => `[${a}`);
      for (let keyword of keywords) {
        if (locator.indexOf(keyword) >= 0) score += 75;
      }

      for (let token of locator.split(/[\s\.\\[>]+/)) {
        if (uniqueElements.includes(token)) score += 25;
      }

      for (let keyword of ['.test-', '.lc-']) { // special classes
        if (locator.indexOf(keyword) >= 0) score += 100;
      }          


      let numClasses = locator.match(/\.[\w-]+/g)
      if (numClasses) score += numClasses.length * 15;
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
    if (score > 70) return `We didn't try it, but your locator looks very unique!`;

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