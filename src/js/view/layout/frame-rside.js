/**
 * @fileoverview Right Side Frame
 * @author NHN Ent. FE Development Team
 */
'use strict';

var Frame = require('./frame');

/**
 * right side frame class
 * @module view/layout/frame-rside
 * @extends module:view/layout/frame
 */
var RsideFrame = Frame.extend(/**@lends module:view/layout/frame-rside.prototype */{
    /**
     * @constructs
     */
    initialize: function() {
        Frame.prototype.initialize.apply(this, arguments);
        this.setOwnProperties({
            whichSide: 'R',
            $scrollBorder: null
        });
        this.listenTo(this.dimensionModel, 'change:bodyHeight change:headerHeight',
            this._resetScrollBorderHeight);
    },

    className: 'rside_area',

    /**
     * Event handler for 'columnWidthChanged' event on dimensionModel
     * @private
     * @override
     */
    _onColumnWidthChanged: function() {
        var dimensionModel = this.dimensionModel;

        this.$el.css({
            width: dimensionModel.get('rsideWidth'),
            marginLeft: dimensionModel.get('lsideWidth')
        });
    },

    /**
     * Resets the height of a vertical scroll-bar border
     */
    _resetScrollBorderHeight: function() {
        var dimensionModel = this.dimensionModel,
            height = dimensionModel.get('bodyHeight') - dimensionModel.getScrollXHeight();

        this.$scrollBorder.height(height);
    },

    /**
     * To be called before rendering.
     */
    beforeRender: function() {
        var dimensionModel = this.dimensionModel;

        this.$el.css({
            display: 'block',
            width: dimensionModel.get('rsideWidth'),
            marginLeft: dimensionModel.get('lsideWidth')
        });
    },

    /**
     * To be called after rendering.
     */
    afterRender: function() {
        var dimensionModel = this.dimensionModel,
            $space, $scrollBorder, $scrollCorner,
            headerHeight, bodyHeight;

        if (!this.dimensionModel.get('scrollY')) {
            return;
        }
        headerHeight = dimensionModel.get('headerHeight');
        bodyHeight = dimensionModel.get('bodyHeight');

        // Empty DIV for hiding scrollbar in the header area
        $space = $('<div />').addClass('header_space');

        // Empty DIV for showing a left-border of vertical scrollbar in the body area
        $scrollBorder = $('<div />').addClass('scrollbar_border');

        // Empty DIV for filling gray color in the right-bottom corner of the scrollbar.
        // (For resolving the issue that styling scrollbar-corner with '-webkit-scrollbar-corner'
        //  casues to be stuck in the same position in Chrome)
        $scrollCorner = $('<div />').addClass('scrollbar_corner');

        $space.height(headerHeight - 2); // subtract 2px for border-width (top and bottom)
        $scrollBorder.css('top', headerHeight + 'px');
        $scrollCorner.css('bottom', dimensionModel.get('toolbarHeight'));

        this.$el.append($space, $scrollBorder, $scrollCorner);

        this.$scrollBorder = $scrollBorder;
        this._resetScrollBorderHeight();
    }
});

module.exports = RsideFrame;
