import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.body.helpers ({
  resolutions: [
    { title: "Hello Resolutions #1"},
    { title: "Hello Resolutions #2"},
    { title: "Hello Resolutions #3"}
  ]
});


var autotrader = require('./autotrader.json'); //with path


Template.body.helpers ({
  tundras: autotrader
});


console.log (autotrader)
