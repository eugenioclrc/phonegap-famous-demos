
/**
 * carga los query param
 */
var gup = function (name) {
    'use strict';

    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regexS = '[\\?&]' + name + '=([^&#]*)';
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results === null) {
        return '';
    } else {
        return results[1];
    }
};

define(function(require, exports, module) {
    // uncomment your desired demo

    // require('examples/core/Context/example');
    // require('examples/core/Context/context-in-existing-element');
    // require('examples/core/Context/setting-perspective');
    // require('examples/core/Engine/example');
    // require('examples/core/EventHandler/example');
    // require('examples/core/EventHandler/trigger');
    // require('examples/core/Modifier/branching');
    // require('examples/core/Modifier/chaining');
    // require('examples/core/Modifier/example');
    // require('examples/core/Modifier/opacity');
    // require('examples/core/Modifier/origin');
    // require('examples/core/Modifier/size');
    // require('examples/core/Scene/example');
    // require('examples/core/Surface/example');
    // require('examples/core/Surface/true-sizing');
    // require('examples/core/Transform/example');
    // require('examples/core/View/example');
    // require('examples/events/EventArbiter/example');
    // require('examples/events/EventFilter/pipe-filter');
    // require('examples/events/EventFilter/subscribe-filter');
    // require('examples/events/EventMapper/example');
    // require('examples/views/HeaderFooterLayout/example');
    // require('examples/views/HeaderFooterLayout/with-sized-modifier');
    // require('examples/views/RenderController/example');
    // require('examples/views/Scrollview/example');
    // require('examples/views/SequentialLayout/example');
    // require('examples/inputs/GenericSync/example');
    // require('examples/inputs/GenericSync/accumulator');
    // require('examples/inputs/MouseSync/example');
    // require('examples/inputs/MouseSync/accumulator');
    // require('examples/inputs/MouseSync/single-dimensional');
    // require('examples/inputs/PinchSync/example');
    // require('examples/inputs/RotateSync/example');
    // require('examples/inputs/ScaleSync/example');
    // require('examples/inputs/ScrollSync/example');
    // require('examples/inputs/TouchSync/example');
    // require('examples/inputs/TouchSync/single-dimensional');
    // require('examples/inputs/TouchSync/accumulator');
    // require('examples/math/Matrix/example');
    // require('examples/math/Quaternion/example');
    // require('examples/math/Random/example');
    // require('examples/math/Vector/example');
    // require('examples/modifiers/Draggable/example');
    // require('examples/modifiers/ModifierChain/example');
    // require('examples/surfaces/ContainerSurface/example');
    // require('examples/surfaces/ImageSurface/example');
    // require('examples/surfaces/InputSurface/example');
    // require('examples/transitions/Easing/example');
    // require('examples/transitions/SnapTransition/example');
    // require('examples/transitions/SpringTransition/example');
    // require('examples/transitions/Transitionable/example');
    // require('examples/transitions/TransitionableTransform/example');
    // require('examples/transitions/TweenTransition/example');
    // require('examples/transitions/WallTransition/example');
    // require('examples/utilities/KeyCodes/example');
    // require('examples/utilities/Timer/after');
    // require('examples/utilities/Timer/clear');
    // require('examples/utilities/Timer/every');
    // require('examples/utilities/Timer/setInterval');
    // require('examples/utilities/Timer/setTimeout');
    // require('examples/utilities/Utility/after');
    // require('examples/views/Deck/example');
    // require('examples/views/EdgeSwapper/example');
    // require('examples/views/FlexibleLayout/example');
    // require('examples/views/Flipper/example');
    // require('examples/views/GridLayout/example');
    // require('examples/views/GridLayout/with-sized-modifier');
    // require('examples/views/HeaderFooterLayout/example');
    if(gup('demo')!=='1') {
        console.log('examples/views/HeaderFooterLayout/with-sized-modifier');
        require('examples/views/HeaderFooterLayout/with-sized-modifier');
    }else {
        console.log('examples/views/RenderController/example');
        require('examples/views/RenderController/example');
    }
    //require('examples/views/Scrollview/example');
    // require('examples/views/SequentialLayout/example');

});
