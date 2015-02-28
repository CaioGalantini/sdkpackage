/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.DateRangeSliderInternalRenderer");jQuery.sap.require("sap.ui.commons.RangeSliderRenderer");jQuery.sap.require("sap.ui.core.Renderer");sap.suite.ui.commons.DateRangeSliderInternalRenderer=sap.ui.core.Renderer.extend(sap.ui.commons.RangeSliderRenderer);
sap.suite.ui.commons.DateRangeSliderInternalRenderer.renderBufferDivForBubbles=function(r,d){if(d.getShowBubbles()){r.write('<DIV id="'+d.getId()+'-bubbleBuffer" style="height:40px">');r.write('</DIV>')}};
sap.suite.ui.commons.DateRangeSliderInternalRenderer.renderEnclosingDiv=function(r,d){r.write('<DIV');r.writeControlData(d);r.addClass('sapUiSli');this.controlAdditionalCode(r,d);if(d.getTooltip_AsString()){r.writeAttributeEscaped('title',d.getTooltip_AsString())}if(!d.getVertical()&&d.getWidth()){r.writeAttribute('style','width:'+d.getWidth()+';')}if(!d.getEnabled()){r.addClass('sapUiSliDsbl')}else{if(!d.getEditable()){r.addClass('sapUiSliRo')}else{r.addClass('sapUiSliStd')}}if(!d.getVertical()){r.addClass('sapUiSliHori')}if(d.getShowBubbles()){r.addClass('sapUiSuiteDRSliBub')}r.writeClasses();r.write('>')};
sap.suite.ui.commons.DateRangeSliderInternalRenderer.renderEnclosingDivEnd=function(r,d){r.write('</DIV>')};
sap.suite.ui.commons.DateRangeSliderInternalRenderer.renderAriaGripTooltip=function(r,d){if(d.getTooltip_AsString()){r.write('<SPAN id="'+d.getId()+'-Descr" style="visibility: hidden; display: none;">');r.writeEscaped(d.getTooltip_AsString());r.write('</SPAN>')}};
sap.suite.ui.commons.DateRangeSliderInternalRenderer.renderBubbles=function(r,d){if(!d.getShowBubbles()){return}r.write('<div id="'+d.getId()+'-bubble"');r.addClass("sapSuiteUiCommonsDateRangeSliderBubble");r.writeClasses();r.write('>');r.write('<div');r.addClass("sapSuiteUiCommonsDateRangeSliderBubbleLbl");r.writeClasses();r.write('>');r.renderControl(d._oBubble);r.write('</div>');r.write('</div>');r.write('<div id="'+d.getId()+'-bubble2"');r.addClass("sapSuiteUiCommonsDateRangeSliderBubble");r.writeClasses();r.write('>');r.write('<div');r.addClass("sapSuiteUiCommonsDateRangeSliderBubbleLbl");r.writeClasses();r.write('>');r.renderControl(d._oBubble2);r.write('</div>');r.write('</div>')};
sap.suite.ui.commons.DateRangeSliderInternalRenderer.renderSliderBar=function(r,d){r.write('<DIV');r.writeAttribute('id',d.getId()+'-right');r.write('class="sapUiSliR"> <DIV');r.writeAttribute('id',d.getId()+'-left');r.write('class="sapUiSliL"> <DIV');r.writeAttribute('id',d.getId()+'-bar');r.write('class="sapUiSliBar">')};
sap.suite.ui.commons.DateRangeSliderInternalRenderer.renderSliderBarEnd=function(r,d){r.write('</DIV></DIV></DIV>')};
sap.suite.ui.commons.DateRangeSliderInternalRenderer.renderTicksAndLabels=function(r,d){var u=false;if(d.getLabels()&&d.getLabels().length>0){u=true}if(d.getTotalUnits()>0||u){var t=d.getTotalUnits();if(u){t=d.getLabels().length-1}for(var i=0;i<=t;i++){r.write('<DIV');r.writeAttribute('id',d.getId()+'-tick'+i);r.write('class="sapUiSliTick" ');r.write('></DIV>');if(d.getStepLabels()){r.write('<DIV');r.writeAttribute('id',d.getId()+'-text'+i);switch(i){case(0):r.write('class="sapUiSliText sapUiSliTextLeft" >');break;case(t):r.write('class="sapUiSliText sapUiSliTextRight" >');break;default:r.write('class="sapUiSliText" >');break}if(u){r.write(d.getLabels()[i])}else{var s=(d.getMax()-d.getMin())/t;r.write(d.getMin()+i*s)}r.write('</DIV>')}}}};
sap.suite.ui.commons.DateRangeSliderInternalRenderer.renderHighlightBar=function(r,d){r.write('<DIV');r.writeAttribute('id',d.getId()+'-hili');r.write('class="sapUiSliHiLi"></DIV>')};
sap.suite.ui.commons.DateRangeSliderInternalRenderer.renderGrip=function(r,d){r.write('<DIV');r.writeAttribute('id',d.getId()+'-grip');if(d.getEnabled()){r.writeAttribute('tabIndex','0')}else{r.writeAttribute('tabIndex','-1')}if(d.getPinGrip()){r.write('class="sapUiSliGrip sapUiSliGripPin"')}else{r.write('class="sapUiSliGrip"')}r.writeAccessibilityState(d,{role:'slider',controls:d.getId()+'-grip',orientation:'horizontal',valuemin:d.getFormattedDate(d.getMinDate()),valuemax:d.getFormattedDate(d.getValue2Date()),valuenow:d.getValue(),valuetext:d.getFormattedDate(d.getValueDate()),disabled:!d.getEditable()||!d.getEnabled(),describedby:d.getTooltip_AsString()?(d.getId()+'-Descr '+d.getAriaDescribedBy().join(" ")):undefined,live:'assertive'});r.write('>&#9650;</DIV>')};
sap.suite.ui.commons.DateRangeSliderInternalRenderer.renderGrip2=function(r,d){r.write('<DIV');r.writeAttribute('id',d.getId()+'-grip2');if(d.getEnabled()){r.writeAttribute('tabIndex','0')}else{r.writeAttribute('tabIndex','-1')}if(d.getPinGrip2()){r.write('class="sapUiSliGrip sapUiSliGripPin"')}else{r.write('class="sapUiSliGrip"')}r.writeAttribute('title',d.getValue2());r.writeAccessibilityState(d,{role:'slider',controls:d.getId()+'-grip2',orientation:'horizontal',valuemin:d.getFormattedDate(d.getValueDate()),valuemax:d.getFormattedDate(d.getMaxDate()),valuenow:d.getValue2(),valuetext:d.getFormattedDate(d.getValue2Date()),disabled:!d.getEditable()||!d.getEnabled(),describedby:d.getTooltip_AsString()?(d.getId()+'-Descr '+d.getAriaDescribedBy().join(" ")):undefined,live:'assertive'});r.write('>&#9650;</DIV>')};
sap.suite.ui.commons.DateRangeSliderInternalRenderer.render=function(r,d){if(!d.getVisible()){return}this.renderEnclosingDiv(r,d);this.renderBufferDivForBubbles(r,d);this.renderAriaGripTooltip(r,d);this.renderBubbles(r,d);this.renderSliderBar(r,d);this.renderTicksAndLabels(r,d);this.renderHighlightBar(r,d);if(d.getPinGrip()||(d.getPinGrip()&&d.getPinGrip2())||(!d.getPinGrip()&&!d.getPinGrip2())){this.renderGrip(r,d);this.renderGrip2(r,d)}else if(d.getPinGrip2()){this.renderGrip2(r,d);this.renderGrip(r,d)}this.renderSliderBarEnd(r,d);this.renderEnclosingDivEnd(r,d)};
