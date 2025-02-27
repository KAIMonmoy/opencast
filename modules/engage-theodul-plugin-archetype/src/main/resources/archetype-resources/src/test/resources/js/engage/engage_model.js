/**
 * Licensed to The Apereo Foundation under one or more contributor license
 * agreements. See the NOTICE file distributed with this work for additional
 * information regarding copyright ownership.
 *
 *
 * The Apereo Foundation licenses this file to you under the Educational
 * Community License, Version 2.0 (the "License"); you may not use this file
 * except in compliance with the License. You may obtain a copy of the License
 * at:
 *
 *   http://opensource.org/licenses/ecl2.txt
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations under
 * the License.
 *
 */
/*jslint browser: true, nomen: true*/
/*global define, CustomEvent*/
define(['require', 'jquery', 'underscore', 'backbone'], function (require, $, _, Backbone) {
  var PLUGIN_MANAGER_PATH = '/engage/theodul-deprecated/manager/list.json';

  var PluginInfoModel = Backbone.Model.extend({
    // URL of the search enpoint
    urlRoot : PLUGIN_MANAGER_PATH,
      defaults : {
        "pluginlist" : {
          "plugins" : {}
        }
      }
  });

  var PluginModelCollection = Backbone.Collection.extend({
  });

  var EngageModel = Backbone.Model.extend({
    defaults : {
      "pluginsInfo" : new PluginInfoModel(),
      "pluginModels" : new PluginModelCollection(),
      "urlParameters": {}
    }
  });

  return EngageModel;
});
