/**
 * @fileoverview Toolbar model class
 * @author NHN Ent. FE Development Team
 */
'use strict';

var Model = require('../base/model'),
    util = require('../common/util');

/**
 * Toolbar Model
 * @module model/toolbar
 * @extends module:base/model
 */
var Toolbar = Model.extend(/**@lends module:model/toolbar.prototype */{
    /**
     * @constructs
     * @param  {object} options - Options
     */
    initialize: function(options) {
        Model.prototype.initialize.apply(this, arguments);
    },

    defaults: {
        // set by user
        hasControlPanel: false,
        hasPagination: false,
        hasResizeHandler: false,

        // for control panel
        isExcelButtonVisible: false,
        isExcelAllButtonVisible: false,

        // tui.component.pagination
        pagination: null
    },

    /**
     * Returns whether the toolbar is visible
     * @returns {Boolean} True if the toolbar is visible
     */
    isVisible: function() {
        return this.get('hasControlPanel') || this.get('hasPagination') || this.get('hasResizeHandler');
    }
});

module.exports = Toolbar;
