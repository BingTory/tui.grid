/**
 * @fileoverview Dummy cell painter
 * @author NHN Ent. FE Development Team
 */
'use strict';

var Painter = require('../base/painter');
var util = require('../common/util');

/**
 * Dummy Cell Painter
 * @module painter/dummyCell
 * @extends module:base/painter
 */
var DummyCell = tui.util.defineClass(Painter, /**@lends module:painter/dummyCell.prototype */{
    /**
     * @constructs
     */
    init: function() {
        Painter.apply(this, arguments);
    },

    /**
     * Event handlers
     */
    eventHandler: {
        dblclick: '_onDblClick'
    },

    /**
     * Returns the edit type of the cell.
     * (To implement interface of module:painter/cell)
     * @returns {String} Edit type
     */
    getEditType: function() {
        return 'dummy';
    },

    /**
     * Event handler for 'dblclick' event
     * @private
     */
    _onDblClick: function() {
        this.grid.dataModel.append({}, {
            focus: true
        });
    },

    /**
     * Returns the HTML string (TD) of the cell
     * @override
     * @returns {string} HTML string
     */
    getHtml: function() {
        // '&nbsp' for height issue with empty cell in IE7
        return '<td edit-type="dummy" class="dummy">&nbsp;</td>';
    }
});

module.exports = DummyCell;
