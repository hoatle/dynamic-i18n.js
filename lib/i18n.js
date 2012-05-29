/*
 * Copyright (C) hoatle
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Dynamic I18N's APIs.
 *
 * @constructor
 */
var I18N = function() {
  _init.call(this);
};

var VERSION = '0.1.0';

/**
 * Initializes the I18N object.
 *
 * @private
 */
function _init() {

}


/**
 * Sets the message pattern to translate.
 *
 * @param messagePattern
 * @return {*}
 */
I18N.prototype._ = function(messagePattern) {

  return this;
}



/**
 * Sets the messageArguments for message formatting.
 *
 * Argument could be an array of string objects and/or map objects.
 *
 * @return {*}
 */
I18N.prototype.messageArguments = function(messageArguments) {

  return this;
}

/**
 * Appends argument for message formatting.
 *
 * Argument could be a string object or key/value pair.
 *
 * @return {*}
 */
I18N.prototype.appendArgument = function(key, value) {

  return this;
}

/**
 * Explicitly set the expected local for translating the message.
 *
 * @param targetLocale the target Locale object
 * @return {*}
 */
I18N.prototype.locale = function(targetLocale) {

  return this;
}

/**
 * Translates the input message with all context information.
 *
 * @return {String}
 */
I18N.prototype.translate = function() {

  return '';
}

//exports module API.
exports = module.exports = new I18N();

exports.VERSION = VERSION;