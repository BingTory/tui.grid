tui.util.defineNamespace("fedoc.content", {});
fedoc.content["theme_styleGenerator.js.html"] = "      <div id=\"main\" class=\"main\">\n\n\n\n    \n    <section>\n        <article>\n            <pre class=\"prettyprint source linenums\"><code>/**\n* @fileoverview css style generator\n* @author NHN Ent. FE Development Team\n*/\n'use strict';\n\nvar builder = require('./cssRuleBuilder');\nvar classNameConst = require('../common/classNameConst');\n\n/**\n * Shortcut for the builder.createClassRule() method.\n */\nvar classRule = _.bind(builder.createClassRule, builder);\n\n/**\n * Creates a rule string for background and text colors.\n * @param {String} className - class name\n * @param {Objecr} options - options\n * @returns {String}\n */\nfunction bgTextRuleString(className, options) {\n    return classRule(className)\n        .bg(options.background)\n        .text(options.text)\n        .build();\n}\n\nmodule.exports = {\n    /**\n     * Generates a css string for the grid.\n     * @param {Object} options - options\n     * @returns {String}\n     */\n    grid: function(options) {\n        var containerRule = classRule(classNameConst.CONTAINER)\n            .bg(options.background)\n            .border(options.border)\n            .text(options.text);\n        var tableRule = classRule(classNameConst.TABLE).border(options.border);\n        var headRule = classRule(classNameConst.HEAD_AREA).border(options.border);\n        var borderLineRule = classRule(classNameConst.BORDER_LINE).bg(options.border);\n        var scrollHeadRule = classRule(classNameConst.SCROLLBAR_HEAD).border(options.border);\n        var scrollBorderRule = classRule(classNameConst.SCROLLBAR_BORDER).bg(options.border);\n\n        return builder.buildAll([\n            containerRule,\n            tableRule,\n            headRule,\n            borderLineRule,\n            scrollHeadRule,\n            scrollBorderRule\n        ]);\n    },\n\n    /**\n     * Generates a css string for scrollbars.\n     * @param {Object} options - options\n     * @returns {String}\n     */\n    scrollbar: function(options) {\n        var webkitScrollbarRules = builder.createWebkitScrollbarRules('.' + classNameConst.CONTAINER, options);\n        var ieScrollbarRule = builder.createIEScrollbarRule('.' + classNameConst.CONTAINER, options);\n        var rightBottomRule = classRule(classNameConst.SCROLLBAR_RIGHT_BOTTOM).bg(options.background);\n        var leftBottomRule = classRule(classNameConst.SCROLLBAR_LEFT_BOTTOM).bg(options.background);\n        var scrollHeadRule = classRule(classNameConst.SCROLLBAR_HEAD).bg(options.background);\n\n        return builder.buildAll(webkitScrollbarRules.concat([\n            ieScrollbarRule,\n            rightBottomRule,\n            leftBottomRule,\n            scrollHeadRule\n        ]));\n    },\n\n    /**\n     * Generates a css string for a toolbar.\n     * @param {Object} options - options\n     * @returns {String}\n     */\n    toolbar: function(options) {\n        var toolbarRule = classRule(classNameConst.TOOLBAR)\n            .bg(options.background)\n            .border(options.border);\n\n        var resizeHandleRule = classRule(classNameConst.HEIGHT_RESIZE_HANDLE)\n            .border(options.border);\n\n        return builder.buildAll([\n            toolbarRule,\n            resizeHandleRule\n        ]);\n    },\n\n    /**\n     * Generates a css string for selection layers.\n     * @param {Object} options - options\n     * @returns {String}\n     */\n    selection: function(options) {\n        return classRule(classNameConst.LAYER_SELECTION)\n            .bg(options.background)\n            .border(options.border)\n            .build();\n    },\n\n    /**\n     * Generates a css string for table cells.\n     * @param {Object} options - options\n     * @returns {String}\n     */\n    cell: function(options) {\n        var cellRule = classRule(classNameConst.CELL)\n            .bg(options.background)\n            .border(options.border)\n            .borderWidth(options)\n            .text(options.text);\n\n        return cellRule.build();\n    },\n\n    /*\n     * Generates a css string for head cells.\n     * @param {Object} options - options\n     * @returns {String}\n     */\n    cellHead: function(options) {\n        var headRule = classRule(classNameConst.CELL_HEAD)\n            .bg(options.background)\n            .border(options.border)\n            .borderWidth(options)\n            .text(options.text);\n\n        return headRule.build();\n    },\n\n    /**\n     * Generates a css string for the cells in even rows.\n     * @param {Object} options - options\n     * @returns {String}\n     */\n    cellEvenRow: function(options) {\n        return classRule(classNameConst.CELL_ROW_EVEN)\n            .bg(options.background)\n            .build();\n    },\n\n    /**\n     * Generates a css string for selected head cells.\n     * @param {Object} options - options\n     * @returns {String}\n     */\n    cellSelectedHead: function(options) {\n        return builder.create('.' + classNameConst.CELL_HEAD + '.' + classNameConst.CELL_SELECTED)\n            .bg(options.background)\n            .text(options.text)\n            .build();\n    },\n\n    /**\n     * Generates a css string for focused cells.\n     * @param {Object} options - options\n     * @returns {String}\n     */\n    cellFocused: function(options) {\n        var focusLayerRule = classRule(classNameConst.LAYER_FOCUS_BORDER).bg(options.border);\n        var editingLayerRule = classRule(classNameConst.LAYER_EDITING).border(options.border);\n\n        return builder.buildAll([focusLayerRule, editingLayerRule]);\n    },\n\n    /**\n     * Generates a css string for editable cells.\n     * @param {Object} options - options\n     * @returns {String}\n     */\n    cellEditable: function(options) {\n        return bgTextRuleString(classNameConst.CELL_EDITABLE, options);\n    },\n\n    /**\n     * Generates a css string for required cells.\n     * @param {Object} options - options\n     * @returns {String}\n     */\n    cellRequired: function(options) {\n        return bgTextRuleString(classNameConst.CELL_REQUIRED, options);\n    },\n\n    /**\n     * Generates a css string for disabled cells.\n     * @param {Object} options - options\n     * @returns {String}\n     */\n    cellDisabled: function(options) {\n        return bgTextRuleString(classNameConst.CELL_DISABLED, options);\n    },\n\n    /**\n     * Generates a css string for dummy cells.\n     * @param {Object} options - options\n     * @returns {String}\n     */\n    cellDummy: function(options) {\n        return bgTextRuleString(classNameConst.CELL_DUMMY, options);\n    },\n\n    /**\n     * Generates a css string for invalid cells.\n     * @param {Object} options - options\n     * @returns {String}\n     */\n    cellInvalid: function(options) {\n        return bgTextRuleString(classNameConst.CELL_INVALID, options);\n    },\n\n    /**\n     * Generates a css string for cells in a current row.\n     * @param {Object} options - options\n     * @returns {String}\n     */\n    cellCurrentRow: function(options) {\n        return bgTextRuleString(classNameConst.CELL_CURRENT_ROW, options);\n    }\n};\n</code></pre>\n        </article>\n    </section>\n\n\n\n</div>\n\n"