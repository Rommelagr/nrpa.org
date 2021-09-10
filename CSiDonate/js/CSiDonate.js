/**
 * Container class for retrieving known elements using query selectors.
 */
var El = /** @class */ (function () {
    function El() {
    }
    Object.defineProperty(El, "Form", {
        // ReSharper disable InconsistentNaming
        get: function () { return $('form#idonate_form'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "CreateRecurringCheckbox", {
        get: function () { return $('input[id$=cbCreateRecurring]'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "CreatePledgeCheckbox", {
        get: function () { return $('input[id$=cbCreatePledge]'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "RecurringFrequencyDropdown", {
        get: function () { return $('select[id$=ddlRecurringFreq]'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "RecurringOccurrenceDropdown", {
        get: function () { return $('select[id$=ddlRecurringTerm]'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "PledgeFrequencyDropdown", {
        get: function () { return $('select[id$=ddlPledgeFreq]'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "PledgeOccurrenceDropdown", {
        get: function () { return $('select[id$=ddlPledgeTerm]'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "TributeTypeDropdown", {
        get: function () { return $('select[id$=ddlDedType]'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "AnonymousCheckbox", {
        get: function () { return $('input[id$=cbAnonymous]'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "ListAsTextbox", {
        get: function () { return $('input[id$=tbListAs]'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "DonorWallCheckbox", {
        get: function () { return $('input[id$=cbDonorWallOption]'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "DonorWallHideAmountCheckbox", {
        get: function () { return $('#donor-wall-hide-amount'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "DonorWallNote", {
        get: function () { return $('#donor-wall-note'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "MonthDropdown", {
        get: function () { return $('select[id$=ddlMonth]'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "YearDropdown", {
        get: function () { return $('select[id$=ddlYear]'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "AmountButtons", {
        get: function () { return $('.amount-selector .amount'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "AmountChoosers", {
        get: function () { return $('input[id*=amtChooser]'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "AmountChooserRadios", {
        get: function () { return $('input[id*=amtChooser][type=radio]'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "AmountTextbox", {
        get: function () { return $('input[id$=tbOtherAmount]'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "OriginalAmountField", {
        get: function () { return $('input[id$=tbOriginalAmount]'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "StateDropdown", {
        get: function () { return $('select[id$=ddlStateProvince]'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "StateTextbox", {
        get: function () { return $('input[id$=tbOtherState]'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "CountryDropdown", {
        get: function () { return $('select[id$=ddlCountry]'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "PhoneTextbox", {
        get: function () { return $('input[id$=tbPhone]'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "CcNumTextbox", {
        get: function () { return $('input[id$=tbCardNumber]'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "CcCvv2Textbox", {
        get: function () { return $('input[id$=tbCSC]'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "CcNameTextbox", {
        get: function () { return $('input[id$=tbCardName]'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "AchAccountNameTextbox", {
        get: function () { return $('input[id$=tbAccountName]'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "AchAccountNumTextbox", {
        get: function () { return $('input[id$=tbAccountNumber]'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "AchRoutingNumTextbox", {
        get: function () { return $('input[id$=tbRoutingNumber]'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "AchCheckingRadio", {
        get: function () { return $('input[id$=rbAccTypeChecking]'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "AchSavingsRadio", {
        get: function () { return $('input[id$=rbAccTypeSavings]'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "AchGenLedgerRadio", {
        get: function () { return $('input[id$=rbAccTypeGeneralLedger]'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "PaymentTokenField", {
        get: function () { return $('input[id$=PaymentToken]'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "PaymentTypeField", {
        get: function () { return $('input[id$=PaymentTypeField]'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "CoverFeesCheckbox", {
        get: function () { return $('input[id$=cbCoverFees]'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "CardReaderData", {
        get: function () { return $('input[id$=CardReaderData]'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "AddMultiTribButton", {
        get: function () { return $('#trib-add'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "Tribs", {
        get: function () { return $('.multi-trib > .trib'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "MultiTribMessageButton", {
        get: function () { return $('.trib-button.trib-btn-msg'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "RemoveMultiTribButton", {
        get: function () { return $('.trib-button.trib-btn-remove'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "MultiTribSearchButton", {
        get: function () { return $('.trib-button.trib-btn-search'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "MultiTribRemoveSearchButton", {
        get: function () { return $('.trib-button.trib-btn-remove-search'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "FundTree", {
        get: function () { return $('div#FundTree.fund-tree'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "CcButton", {
        get: function () { return $('#payTypeCc'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "AchButton", {
        get: function () { return $('#payTypeAch'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "CardReaderButton", {
        get: function () { return $('#payTypeCardReader'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "Wait", {
        get: function () { return $('#wait'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "CcContainer", {
        get: function () { return $('#paymentCreditCard'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "AchContainer", {
        get: function () { return $('#paymentAch'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "CrContainer", {
        get: function () { return $('#paymentCardReader'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "FeeMessage", {
        get: function () { return $('#feeCalc'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "FeeRecurNote", {
        get: function () { return $('#recurFeeNote'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "FeeAmount", {
        get: function () { return $('#feeCalc > .feeTotal'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "SelectedCcMonth", {
        get: function () { return $('select[id$=ddlMonth] option:selected'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "SelectedCcYear", {
        get: function () { return $('select[id$=ddlYear] option:selected'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "IsAchCheckingEnabled", {
        get: function () { return El.AchCheckingRadio.is(':checked'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "IsAchSavingsEnabled", {
        get: function () { return El.AchSavingsRadio.is(':checked'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(El, "IsAchGenLedgerEnabled", {
        get: function () { return El.AchGenLedgerRadio.is(':checked'); },
        enumerable: false,
        configurable: true
    });
    return El;
}());

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Masking = /** @class */ (function () {
    function Masking() {
    }
    Masking.initializeInputMasks = function () {
        var _this = this;
        El.AmountTextbox.inputmask('9{1,7}[.9{2}]', this.defaultMaskOptions);
        El.AchAccountNumTextbox.inputmask('9{4,17}', this.defaultMaskOptions);
        El.AchRoutingNumTextbox.inputmask('9{9}', this.defaultMaskOptions);
        El.CcNumTextbox.keyup(function () { El.CcNumTextbox.inputmask(__assign({ mask: function () { return /^3(4|7)/.test(El.CcNumTextbox.val()) ? '9999 999999 99999' : '9999 9999 9999 9999'; } }, _this.defaultMaskOptions)); });
        El.CcCvv2Textbox.inputmask('9{3,4}', this.defaultMaskOptions);
    };
    Masking.defaultMaskOptions = {
        showMaskOnFocus: false,
        showMaskOnHover: false,
        greedy: true,
        keepStatic: false
    };
    return Masking;
}());

var Main = /** @class */ (function () {
    function Main() {
        var _this = this;
        if (typeof $ === 'undefined') {
            console.error('jQuery ($) is not defined! iDonate requires $ to be set to a jQuery 1.x or 2.x instance.');
        }
        $(function () {
            Utility.verifyOrShowOptionsErrors();
            El.CcButton.click(_this.activateCreditCard);
            El.AchButton.click(_this.activateAch);
            El.CardReaderButton.click(_this.activateCardReader);
            // Recurring field update events
            El.RecurringFrequencyDropdown.change(function () { return _this.setRecurringFields(); });
            El.RecurringOccurrenceDropdown.change(function () { return _this.setRecurringFields(); });
            El.MonthDropdown.change(function () { return _this.setRecurringFields(); });
            El.YearDropdown.change(function () { return _this.setRecurringFields(); });
            El.AmountTextbox.change(function () { _this.setRecurringFields(); _this.validateAmount(); });
            El.AmountChoosers.change(function () { _this.setRecurringFields(); _this.validateAmount(); });
            El.AmountButtons.click(function () { _this.setRecurringFields(); _this.validateAmount(); });
            El.CreateRecurringCheckbox.click(function () { return _this.setRecurringFields(); });
            _this.setRecurringFields();
            // Pledge field update events
            El.PledgeFrequencyDropdown.change(function () { return _this.setPledgeFields(); });
            El.PledgeOccurrenceDropdown.change(function () { return _this.setPledgeFields(); });
            El.AmountTextbox.change(function () { return _this.setPledgeFields(); });
            El.AmountChoosers.change(function () { return _this.setPledgeFields(); });
            El.AmountButtons.click(function () { return _this.setPledgeFields(); });
            El.CreatePledgeCheckbox.click(function () { return _this.setPledgeFields(); });
            _this.setPledgeFields();
            // Transaction Fee Updates
            El.RecurringFrequencyDropdown.change(function () { return _this.updateFeeAmount(); });
            El.RecurringOccurrenceDropdown.change(function () { return _this.updateFeeAmount(); });
            El.PledgeFrequencyDropdown.change(function () { return _this.updateFeeAmount(); });
            El.PledgeOccurrenceDropdown.change(function () { return _this.updateFeeAmount(); });
            El.MonthDropdown.change(function () { return _this.updateFeeAmount(); });
            El.YearDropdown.change(function () { return _this.updateFeeAmount(); });
            El.AmountTextbox.change(function () { return _this.updateFeeAmount(); });
            El.AmountChoosers.change(function () { return _this.updateFeeAmount(); });
            El.AmountButtons.click(function () { return _this.updateFeeAmount(); });
            El.CreateRecurringCheckbox.click(function () { return _this.updateFeeAmount(); });
            El.CreatePledgeCheckbox.click(function () { return _this.setPledgeFields(); });
            _this.updateFeeAmount();
            // Trib Price Updates
            El.AmountTextbox.change(function () { return _this.multiTrib.refreshState(); });
            El.AmountChoosers.change(function () { return _this.multiTrib.refreshState(); });
            El.AmountButtons.click(function () { return _this.multiTrib.refreshState(); });
            // Transaction Fee Toggle
            El.CoverFeesCheckbox.change(function (e) { return _this.feeCheckToggle(e); });
            // Payment type update events
            El.CreateRecurringCheckbox.click(function () { return _this.updatePaymentType(); });
            _this.updatePaymentType();
            // Expiration date update events
            El.MonthDropdown.change(function () { return _this.ccExpUpdated(); });
            El.YearDropdown.change(function () { return _this.ccExpUpdated(); });
            _this.ccExpUpdated();
            // Misc events
            El.CreateRecurringCheckbox.click(function (e) { return _this.checkToggle(e); });
            El.CreatePledgeCheckbox.click(function (e) { return _this.checkToggle(e); });
            _this.checkToggle(El.CreateRecurringCheckbox[0]);
            _this.checkToggle(El.CreatePledgeCheckbox[0]);
            El.AnonymousCheckbox.click(function (e) {
                if ($(e.currentTarget).is(':checked')) {
                    El.ListAsTextbox.prop('disabled', 'disabled').val('Anonymous');
                }
                else {
                    El.ListAsTextbox.prop('disabled', '').val('');
                }
            });
            El.DonorWallCheckbox.change(function () {
                El.DonorWallCheckbox.is(':checked') ? El.DonorWallNote.show() : El.DonorWallNote.hide();
                El.DonorWallCheckbox.is(':checked') ? El.DonorWallHideAmountCheckbox.show() : El.DonorWallHideAmountCheckbox.hide();
            });
            El.DonorWallCheckbox.change();
            El.TributeTypeDropdown.change(function (e) { return _this.dropToggle(e); });
            _this.dropToggle(El.TributeTypeDropdown[0]);
            El.AchRoutingNumTextbox.change(function () { return _this.updateRoutingNumber(); });
            El.CountryDropdown.change(function () { return _this.flipStateField(); });
            // Stupid Autofill populates this even when its not visible
            El.StateDropdown.change(function () {
                if (!El.StateDropdown.is(':visible')) {
                    El.StateDropdown.get(0).selectedIndex = -1;
                }
            });
            // Initialize payment options
            _this.initializePaymentOptions();
            // Initialize Radio -> Amount text sync events, and Amount Selectors
            El.AmountChooserRadios.change(function (e) { return _this.amountChanged(e); }).each(function (_, e) { return _this.initializeEachAmountSelector(e); });
            //  text change -> Radio sync
            El.AmountTextbox.change(function (e) {
                El.AmountChooserRadios.prop('checked', false);
                El.AmountChooserRadios.filter("[value=\"" + $(e.currentTarget).val().trim() + "\"],[value=\"" + $(e.currentTarget).val().trim() + ".00\"]").prop('checked', true).change();
            });
            // Initialize Fund Tree Events
            _this.initializeFundTreeHelpers();
            Masking.initializeInputMasks();
            // Initialize validation
            _this.validation = new Validation(_this);
            // Initialize multi-tributes
            _this.multiTrib = new MultiTrib();
            // Initialize state saver
            _this.stateSaver = new StateSaver();
            if (El.CoverFeesCheckbox.is(':checked')) {
                El.FeeMessage.show();
            }
            else {
                El.FeeMessage.hide();
            }
        });
    }
    /**
     * Callback that is registered on the reCaptcha script load request. Called when reCaptcha is loaded.
     */
    Main.prototype.onPageLoadCallback = function () {
        grecaptcha.render('dvCaptcha', {
            'sitekey': options.captchaPubKey,
            'size': 'invisible',
            'badge': 'inline',
            'callback': mainApp.recaptchaCallback
        });
    };
    /**
     * Callback from the reCaptcha call.
     * @param response The response from Google that is sent to the server to verify.
     */
    Main.prototype.recaptchaCallback = function (response) {
        console.debug('reCAPTCHA response', response);
        $.ajax({
            type: 'POST',
            url: options.capt_url,
            data: "{response: '" + response + "'}",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (r) {
                var captchaResponse = jQuery.parseJSON(r.d);
                if (captchaResponse.success) {
                    console.debug('reCAPTCHA: Success');
                    $('[id*=txtCaptcha]').val(captchaResponse.success);
                    $('[id*=rfvCaptcha]').hide();
                    mainApp.donateClick(options.buttonId, options.buttonPost, false);
                }
                else {
                    console.debug('reCAPTCHA: Failure');
                    mainApp.donateUnclick(options.buttonId);
                    $('[id*=txtCaptcha]').val('');
                    $('[id*=rfvCaptcha]').show();
                    var error = captchaResponse['error-codes'][0];
                    $('[id*=rfvCaptcha]').html('reCAPTCHA error: ' + error);
                }
            },
            error: function () {
                console.debug('reCAPTCHA: Error');
                mainApp.donateUnclick(options.buttonId);
                $('[id*=txtCaptcha]').val('');
                $('[id*=rfvCaptcha]').show();
                $('[id*=rfvCaptcha]').html('Unknown error contacting reCAPTCHA servers. Try again.');
            }
        });
    };
    Main.prototype.validateAmount = function () {
        if (El.AmountTextbox.val() < window.options.minimumdonationamount) {
            $('#rfvMinDonationAmount').show();
            if ($('#MinimumDonationAmountValidationError').length === 0) {
                var table = document.getElementsByClassName('custom-amount')[0];
                var row = table.insertRow(-1);
                var cell = row.insertCell(0);
                cell.id = 'MinimumDonationAmountValidationError';
                cell.style.color = 'red';
                var text = document.createTextNode('Minimum donation amount is $' + window.options.minimumdonationamount.toFixed(2));
                cell.appendChild(text);
            }
        }
        else {
            $('#rfvMinDonationAmount').hide();
            $('#MinimumDonationAmountValidationError').remove();
        }
    };
    Main.prototype.clearFormCache = function () {
        this.stateSaver.clearState();
    };
    Main.prototype.checkForCachedForm = function () {
        return this.stateSaver.checkForCachedForm();
    };
    Main.prototype.loadCachedForm = function () {
        this.stateSaver.loadCachedForm();
    };
    /**
     * Event from the main donate button on the form.
     */
    Main.prototype.submitDonation = function () {
        console.debug('Donate button clicked');
        this.stateSaver.saveState();
        if (El.CcButton.hasClass('active')) {
            this.validation.enableCcValidation();
        }
        else if (El.AchButton.hasClass('active')) {
            this.validation.enableAchValidation();
        }
        else if (El.CardReaderButton.hasClass('active')) {
            if (!El.CardReaderData.val().length) {
                return;
            }
        }
        else {
            // Nothing is showing right now...?
            return;
        }
        if (El.Form.valid()) {
            // Last parameter determines if it attempts a reCaptcha first or not.
            this.donateClick(options.buttonId, options.buttonPost, options.security);
        }
    };
    Main.prototype.donateClick = function (buttonId, postback, doRecaptcha) {
        var _this = this;
        console.debug('Form valid, starting donation...');
        $('#pmtError').remove();
        if (doRecaptcha) {
            console.debug('Submitting reCAPTCHA request...');
            grecaptcha.execute();
        }
        else {
            console.debug('Executing donation (recaptcha=false)...');
            $('#' + buttonId)
                .prop('disabled', 'disabled')
                .fadeOut(null, function () {
                El.Wait.fadeIn();
                _this.executeDonation(postback);
            });
        }
    };
    Main.prototype.donateUnclick = function (source) {
        console.debug('Donate button un-click');
        // You hvae to reset the recaptcha or subsequent calls to grecaptcha.execute() don't actually do anything.
        if (typeof grecaptcha !== 'undefined') {
            grecaptcha.reset();
        }
        var src = source;
        El.Wait.fadeOut(null, function () {
            $('#' + src).fadeIn(null, function () {
                $('#' + src).prop('disabled', '').removeProp('disabled');
            });
        });
    };
    Main.prototype.executeDonation = function (postback) {
        var _this = this;
        if (El.CardReaderButton.hasClass('active')) {
            // Card reader input
            El.PaymentTypeField.val('R');
            this.prepareFormForSubmission();
            eval(postback);
        }
        else {
            if ((El.CreateRecurringCheckbox.is(':checked') && options.recur.enabled) ||
                (!El.CreateRecurringCheckbox.is(':checked') && options.single.enabled)) {
                console.debug('Requesting payment token...');
                Tokenizer.createPaymentToken(this, function (data) {
                    // Success
                    _this.scrubPaymentInfo();
                    if (data.STATUS === '1' || (data.STATUS.toUpperCase() === 'E' && data.MESSAGE.toUpperCase() === 'DUPLICATE')) {
                        console.warn("Card is a duplicate, re-using transaction " + data.TRANS_ID + ". (This is normal.)");
                    }
                    El.PaymentTokenField.val(data.TRANS_ID);
                    console.debug('Sending POST request...');
                    _this.prepareFormForSubmission();
                    eval(postback);
                }, function (data) {
                    // Payment Error
                    console.warn("Payment error: [" + data.STATUS + "] " + data.MESSAGE);
                    _this.donateUnclick(options.buttonId);
                    $('#pmtError').remove();
                    $('#payment .section').append("\n                            <div class=\"row\" id=\"pmtError\">\n                                <div class=\"error\">\n                                    <span>Invalid credit card, expiration, or account information.</span>\n                                    <small>" + data.STATUS + ":" + data.MESSAGE + "</small>\n                                </div>\n                            </div>");
                }, function (ex) {
                    // Communication Error
                    _this.donateUnclick(options.buttonId);
                    console.error("Payment exception.", ex);
                    $('#pmtError').remove();
                    $('#payment .section').append("\n                            <div class=\"row\" id=\"pmtError\">\n                                <div class=\"error\">\n                                    <span>Unknown payment or communication error.</span>\n                                </div>\n                            </div>");
                });
            }
            else {
                console.debug('No payment token, sending POST request...');
                this.prepareFormForSubmission();
                eval(postback);
            }
        }
    };
    Main.prototype.scrubPaymentInfo = function () {
        El.CcNumTextbox.val('').prop('disabled', 'disabled');
        El.CcCvv2Textbox.val('').prop('disabled', 'disabled');
        El.YearDropdown.val('').prop('disabled', 'disabled').find('option').removeProp('selected');
        El.MonthDropdown.val('').prop('disabled', 'disabled').find('option').removeProp('selected');
        El.AchAccountNumTextbox.val('').prop('disabled', 'disabled');
        El.AchRoutingNumTextbox.val('').prop('disabled', 'disabled');
        El.AchCheckingRadio.removeProp('selected').prop('disabled', 'disabled');
        El.AchSavingsRadio.removeProp('selected').prop('disabled', 'disabled');
        El.AchGenLedgerRadio.removeProp('selected').prop('disabled', 'disabled');
    };
    Main.prototype.initializeEachAmountSelector = function (e) {
        var _this = this;
        var el = $(e);
        var dollarValue = el.nextAll('label').text();
        var amountButton = $('<div class="amount"></div>')
            .html(dollarValue)
            .click(function (ev) { return _this.amountClicked(ev); });
        el.after(amountButton)
            .hide()
            .nextAll('label')
            .hide();
    };
    Main.prototype.initializeFundTreeHelpers = function () {
        // Opener
        $('input[id$=txtSelectedTreeFund]').click(function () {
            El.FundTree.fadeToggle();
        });
        // Click away to close
        $(document).click(function (e) {
            if (!El.FundTree.is(':visible') ||
                $(e.target).hasClass('fund-tree') ||
                $(e.target).hasClass('fund-text') ||
                $(e.target).closest('.fund-tree').length) {
                return;
            }
            El.FundTree.fadeOut();
        });
        // Replace top-level headers with expand/collapse JS targets
        $('.fund-tree a[href*=ToggleNode]').each(function (_, e) {
            $(e).parent().next().children('a').prop('href', $(e).prop('href')).addClass('fund-tree-header');
        });
    };
    Main.prototype.flipStateField = function () {
        if (Utility.isStateBasedCountry(El.CountryDropdown.val().trim().toLowerCase())) {
            El.StateDropdown.show();
            El.StateTextbox.hide();
        }
        else {
            El.StateDropdown.hide();
            El.StateDropdown.get(0).selectedIndex = -1;
            El.StateTextbox.show();
        }
    };
    Main.prototype.initializePaymentOptions = function () {
        // If either payment type is the only one in either array, then do nothing.
        // This setting basically only applies if there are both options for both single and recurring.
        if (options.cc_off && (options.single_types.length === 1 && options.single_types[0] === 'CC') || (options.recur_types.length === 1 && options.recur_types[0] === 'CC')) {
            console.warn('Warning: Cannot disable CC if the only option available is CC. Update template settings / URL.');
            return;
        }
        if (options.ach_off && (options.single_types.length === 1 && options.single_types[0] === 'ACH') || (options.recur_types.length === 1 && options.recur_types[0] === 'ACH')) {
            console.warn('Warning: Cannot disable ACH if the only option available is ACH. Update template settings / URL.');
            return;
        }
        if (options.cc_off) {
            El.CcButton.prop('disabled', 'disabled').hide();
            El.AchButton.click();
        }
        if (options.ach_off) {
            El.AchButton.prop('disabled', 'disabled').hide();
            El.CcButton.click();
        }
        if (options.cr_off) {
            El.CardReaderButton.prop('disabled', 'disabled').hide();
            options.cc_off ? El.AchButton.click() : El.CcButton.click();
        }
        if (window.location.hash === '#a' && !options.ach_off) {
            El.AchButton.click();
        }
        else if (window.location.hash === '#c' && !options.cc_off) {
            El.CcButton.click();
        }
        else if (window.location.hash === '#r' && !options.cr_off) {
            El.CardReaderButton.click();
        }
    };
    Main.prototype.prepareFormForSubmission = function () {
        if (El.CoverFeesCheckbox.is(':checked')) {
            El.OriginalAmountField.val(El.AmountTextbox.val());
            El.AmountTextbox.val(this.calculateFeeAmount());
        }
    };
    Main.prototype.amountClicked = function (e) {
        // Check it
        $(e.currentTarget).prevAll('input').prop('checked', true);
        // Fire off changes for all radios
        El.AmountChooserRadios.change();
        // Also update pledge/recurring stuff
        this.setRecurringFields();
        this.setPledgeFields();
        this.updateFeeAmount();
    };
    Main.prototype.amountChanged = function (e) {
        if ($(e.currentTarget).is(':checked')) {
            El.AmountTextbox.val($(e.currentTarget).val());
            this.validateAmount();
        }
    };
    Main.prototype.feeCheckToggle = function (e) {
        var chk = $(e.currentTarget);
        var checked = chk.is(':checked');
        checked ? El.FeeMessage.show() : El.FeeMessage.hide();
    };
    Main.prototype.calculateFeeAmount = function () {
        var amt = parseFloat(El.AmountTextbox.val());
        if (isNaN(amt)) {
            return '0';
        }
        var pct = options.feePct;
        var cts = options.feeCents;
        return (amt + ((amt * (pct / 100)) + (cts / 100))).toFixed(2);
    };
    Main.prototype.updateFeeAmount = function () {
        var amt = this.calculateFeeAmount();
        if (El.CreateRecurringCheckbox.is(':checked') || El.CreatePledgeCheckbox.is(':checked')) {
            El.FeeAmount.text('$' + amt + '*');
            El.FeeRecurNote.show();
        }
        else {
            El.FeeAmount.text('$' + amt);
            El.FeeRecurNote.hide();
        }
    };
    Main.prototype.checkToggle = function (e) {
        if (typeof e === 'undefined' || !e)
            return;
        var ele = $(e.target || e);
        var targetId = ele.data('toggle-id');
        var target = $('#' + targetId);
        if (target.length > 0) {
            if (ele.is(':checked')) {
                target.show();
            }
            else {
                target.hide();
            }
        }
    };
    Main.prototype.dropToggle = function (e) {
        if (typeof e === 'undefined' || !e)
            return;
        var ele = $(e.target || e);
        var targetId = ele.data('toggle-id');
        var target = $('#' + targetId);
        if (target.length > 0) {
            // If the dropdown's selection is not the first option
            if (ele.find('option:selected').index() > 0) {
                target.show();
            }
            else {
                target.hide();
            }
        }
    };
    Main.prototype.ccExpUpdated = function () {
        this.displayExpiryError(this.isCcExpired());
    };
    Main.prototype.setPledgeFields = function () {
        var freq = parseFloat(El.PledgeFrequencyDropdown.val());
        var term = parseFloat(El.PledgeOccurrenceDropdown.val());
        var amt = parseFloat(El.AmountTextbox.val());
        var estAmt = (amt * term * freq).toFixed(2);
        if (isNaN((amt * term * freq))) {
            estAmt = '-.--';
        }
        $('*[id$=lblPledge]').text("$" + estAmt + " total pledge amount");
        if (freq === 1) {
            El.PledgeOccurrenceDropdown.children("option[value='1']").hide();
            if (term === 1) {
                El.PledgeOccurrenceDropdown.val('2');
            }
        }
        else {
            El.PledgeOccurrenceDropdown.children("option[value='1']").show();
        }
    };
    Main.prototype.setRecurringFields = function () {
        if (!El.CreateRecurringCheckbox.is(':checked')) {
            $('input[id$=recurringOptions]').hide();
            // Turn off the expiry warning.
            this.displayExpiryWarning(false);
            return;
        }
        $('input[id$=recurringOptions]').show();
        var freq = El.RecurringFrequencyDropdown.find('option:selected').text().toLowerCase();
        freq = freq.replace(/ly$/, 's');
        El.RecurringOccurrenceDropdown.find('option').each(function (_, e) {
            var el = $(e);
            if (el.val().toLowerCase() !== 'forever') {
                el.text("for " + el.val() + " " + freq);
            }
        });
        var occur = parseFloat(El.RecurringOccurrenceDropdown.find('option:selected').val());
        this.displayExpiryWarning(this.checkRecurringCreditCardExpiry(freq, occur));
    };
    Main.prototype.checkRecurringCreditCardExpiry = function (freq, term) {
        // If expired, don't bother checking recurring exp
        if (this.isCcExpired()) {
            return false;
        }
        var rawYear = El.SelectedCcYear.val();
        if (rawYear === null || rawYear === '') {
            // User didn't enter a year yet
            return false;
        }
        var month = parseInt(El.SelectedCcMonth.val());
        // Will stop working in the year 2100. :)
        var year = parseInt("20" + rawYear);
        if (month && year && !isNaN(month) && !isNaN(year)) {
            var recurStopsAt = new Date();
            switch (freq) {
                case 'weeks':
                    recurStopsAt = Utility.addDays(recurStopsAt, term * 7);
                    break;
                case 'months':
                    recurStopsAt = Utility.addMonths(recurStopsAt, term);
                    break;
                case 'quarters':
                    recurStopsAt = Utility.addMonths(recurStopsAt, term * 3);
                    break;
                case 'biannuals':
                    recurStopsAt = Utility.addMonths(recurStopsAt, term * 6);
                    break;
                case 'years':
                    recurStopsAt = Utility.addYears(recurStopsAt, term);
                    break;
            }
            // Check if the credit card expires after the recurrence stops
            return recurStopsAt.getFullYear() > year || (recurStopsAt.getFullYear() === year && recurStopsAt.getMonth() >= month);
        }
        return false;
    };
    Main.prototype.isCcExpired = function () {
        var month = parseInt(El.SelectedCcMonth.val());
        // Will stop working in the year 2100. :)
        var rawYear = El.SelectedCcYear.val();
        var year = parseInt('20' + rawYear);
        if (rawYear === null || rawYear === '') {
            // User didn't enter a year yet
            return false;
        }
        if (month && rawYear && !isNaN(month) && !isNaN(year)) {
            var today = new Date();
            // Check if the credit card expires after the recurrence stops
            return today.getFullYear() > year || (today.getFullYear() === year && today.getMonth() >= month);
        }
        return false;
    };
    Main.prototype.activateCreditCard = function (e) {
        $('#valErrors').empty().hide();
        El.CcButton.addClass('active');
        El.AchButton.removeClass('active');
        El.CardReaderButton.removeClass('active');
        El.CcContainer.show().css('display', 'flex').addClass('active');
        El.AchContainer.hide().removeClass('active').find('input, select').val('');
        El.CrContainer.hide().removeClass('active').find('input, select').val('');
        window.location.hash = 'c';
        var form = document.getElementsByTagName('form')[0];
        form.action = form.action.split('#')[0] + window.location.hash;
        if (e) {
            e.preventDefault();
        }
        return false;
    };
    Main.prototype.activateAch = function (e) {
        $('#valErrors').empty().hide();
        El.AchButton.addClass('active');
        El.CcButton.removeClass('active');
        El.CardReaderButton.removeClass('active');
        El.AchContainer.show().css('display', 'flex').addClass('active');
        El.CcContainer.hide().removeClass('active').find('input, select').val('');
        El.CrContainer.hide().removeClass('active').find('input, select').val('');
        window.location.hash = 'a';
        var form = document.getElementsByTagName('form')[0];
        form.action = form.action.split('#')[0] + window.location.hash;
        e.preventDefault();
        return false;
    };
    Main.prototype.activateCardReader = function (e) {
        $('#valErrors').empty().hide();
        El.AchButton.removeClass('active');
        El.CcButton.removeClass('active');
        El.CardReaderButton.addClass('active');
        El.AchContainer.hide().removeClass('active').find('input, select').val('');
        El.CcContainer.hide().removeClass('active').find('input, select').val('');
        El.CrContainer.show().css('display', 'flex').addClass('active');
        window.location.hash = '';
        var form = document.getElementsByTagName('form')[0];
        form.action = form.action.split('#')[0] + window.location.hash;
        var id = 'dialog-' + parseInt((Math.random() * 10000000).toString()).toString();
        $('body').append("<div class=\"modal-outer\" id=\"" + id + "\"><div class=\"modal-inner\"><p id=\"status\">Awaiting card reader input...</p><p><button id=\"modal-close\" type=\"button\">Cancel</button></p><input type=\"text\" class=\"invisible-input\" id=\"cardReaderText\" /></div></div>");
        $('#cardReaderText').focus();
        $('.modal-outer, .modal-inner, .modal-inner p').click(function () {
            $('#cardReaderText').focus();
        });
        $('#modal-close').click(function () {
            $("#" + id).remove();
            El.CcButton.click();
        });
        $('p#status').text('Awaiting card reader input...');
        var handle = 0;
        $('#cardReaderText').keydown(function () {
            var val = $('#cardReaderText').val();
            if (val.length) {
                $('p#status').text("Reading... (" + val.length + " bytes)");
                $('input[name=CardReaderData]').val(val);
                if (handle > 0) {
                    window.clearTimeout(handle);
                }
                handle = window.setTimeout(function () {
                    $('#cardReaderStatus').html("&#x2714; Card swiped. (" + val.length + " bytes)");
                    $("#" + id).remove();
                }, 1200);
            }
            else {
                $('p#status').text('Awaiting card reader input...');
            }
        });
        e.preventDefault();
        return false;
    };
    Main.prototype.updatePaymentType = function () {
        $('*[data-payment-type]').each(function (i, e) {
            var type = ($(e).data('payment-type') || '').toString();
            if (El.CreateRecurringCheckbox.is(':checked')) {
                // Recurring is on, check recurring payment types
                if (options.recur_types.indexOf(type) === -1) {
                    $(e).prop('disabled', 'disabled');
                }
                else {
                    $(e).removeProp('disabled');
                }
            }
            else {
                // Recurring is off, check single payment types
                if (options.single_types.indexOf(type) === -1) {
                    $(e).prop('disabled', 'disabled');
                }
                else {
                    $(e).removeProp('disabled');
                }
            }
        });
        // If the active one is now disabled...
        if ($('.active[data-payment-type]:disabled').length) {
            // ... find the first non-disabled button and 'click' it.
            $('*[data-payment-type]:enabled').click();
        }
    };
    Main.prototype.updateRoutingNumber = function () {
        $('#bankName').text('');
        var val = El.AchRoutingNumTextbox.val();
        if (/^\d{9}$/.test(val)) {
            $.ajax({
                type: 'POST',
                url: options.aba_url,
                data: "{abaNumber: '" + val + "'}",
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                success: function (d) { return $('#bankName').text(d.d || 'Other Bank'); }
            });
        }
    };
    Main.prototype.displayExpiryWarning = function (show) {
        show ? $('#ccWarning').show() : $('#ccWarning').hide();
    };
    Main.prototype.displayExpiryError = function (show) {
        show ? $('#ccError').show() : $('#ccError').hide();
    };
    return Main;
}());
var mainApp = new Main();
function csidRecaptchaCallback() {
    mainApp.onPageLoadCallback();
}

/// <reference path="CSiDonate.Definitions.ts" />
var ErrorType;
(function (ErrorType) {
    ErrorType[ErrorType["Load"] = 0] = "Load";
    ErrorType[ErrorType["Query"] = 1] = "Query";
})(ErrorType || (ErrorType = {}));
var MultiTrib = /** @class */ (function () {
    function MultiTrib() {
        var _this = this;
        // Event handlers
        El.AddMultiTribButton.click(function () { return _this.addMultiTribute(); });
        this.refreshState();
        this.rebindEvents();
    }
    MultiTrib.prototype.rebindEvents = function () {
        var _this = this;
        El.MultiTribMessageButton.off('click');
        El.MultiTribMessageButton.click(function (e) { return _this.editMessage(e); });
        El.RemoveMultiTribButton.off('click');
        El.RemoveMultiTribButton.click(function (e) { return _this.removeMultiTribute(e); });
        El.MultiTribSearchButton.off('click');
        El.MultiTribSearchButton.click(function (e) { return _this.openMemberSearch(e); });
        El.MultiTribRemoveSearchButton.off('click');
        El.MultiTribRemoveSearchButton.click(function (e) { return _this.clearMembeSearch(e); });
    };
    MultiTrib.prototype.getPreviewLength = function () {
        return MultiTrib.previewLength;
    };
    MultiTrib.prototype.addMultiTribute = function () {
        // Find next ID
        var newRow = El.Tribs.first().clone();
        newRow.find('input').val('');
        newRow.find('.trib-msg-preview').text('');
        newRow.find('input[name=mtEmail]').prop('placeholder', 'someone@example.com');
        newRow.find('input[name=mtName]').show();
        newRow.find('.read-only').remove();
        El.Tribs.last().after(newRow);
        this.refreshState();
        this.rebindEvents();
    };
    MultiTrib.prototype.removeMultiTribute = function (el) {
        if (El.Tribs.length === 1) {
            return false;
        }
        $(el.currentTarget).parents('.trib').remove();
        this.refreshState();
        el.preventDefault();
        return false;
    };
    MultiTrib.prototype.refreshState = function () {
        // Remove button show/hide
        El.Tribs.length === 1 ? El.RemoveMultiTribButton.hide() : El.RemoveMultiTribButton.show();
        // Member Search Show/Hide
        El.Tribs.each(function (_, e) {
            if ($(e).data('id')) {
                $(e).find(El.MultiTribSearchButton).fadeOut({
                    complete: function () { return $(e).find(El.MultiTribRemoveSearchButton).fadeIn(); }
                });
            }
            else {
                $(e).find(El.MultiTribRemoveSearchButton).fadeOut({
                    complete: function () { return $(e).find(El.MultiTribSearchButton).fadeIn(); }
                });
            }
        });
        var limit;
        // If price per tribute, update to reflect
        if (options.tribPrice > 0) {
            var amt = parseFloat(El.AmountTextbox.val());
            amt = isNaN(amt) ? 0 : amt;
            limit = Math.min(Math.max(Math.floor(amt / options.tribPrice), 1), options.maxTribs);
        }
        else {
            limit = options.maxTribs;
        }
        // Limit toggle
        var num = El.Tribs.length;
        var off = num >= limit;
        off ? $('#trib-add-on').hide() : $('#trib-add-off').hide();
        !off ? $('#trib-add-on').show() : $('#trib-add-off').show();
        // Stat display
        $('.trib-counter').text(num + " / " + limit);
        // Trim to amount
        this.trimTributesToAmount(limit);
        // Update stat display again since we may have just removed something
        var newNum = El.Tribs.length;
        $('.trib-counter').text(newNum + " / " + limit);
    };
    MultiTrib.prototype.trimTributesToAmount = function (max) {
        var count = El.Tribs.length;
        $(El.Tribs.get().reverse()).each(function (_, el) {
            if (count-- <= max) {
                return;
            }
            $(el).remove();
        });
    };
    MultiTrib.prototype.editMessage = function (el) {
        var _this = this;
        var id = "dialog-" + parseInt((Math.random() * 10000000).toString()).toString();
        var content = '';
        if (window.options.allowuserselectablebanners) {
            if (window.options.selectablebanners) {
                var bannerSelectContent = "<div class=\"banner-selector\" id=\"banner-select-container\">\n                                            <div class=\"label\">\n                                                <span> Select a banner image to send: </span>\n                                            </div>\n                                            <div class=\"field\">\n                                                  <select id=\"banner-select\">\n                                                      <option>None</option>";
                for (var i = 0; i < window.options.selectablebanners.length; i++) {
                    bannerSelectContent += '<option>' + window.options.selectablebanners[i].FileName + '</option>';
                }
                var prevImgSrc = "/CSiDonate/File.aspx/";
                prevImgSrc += window.options.selectablebanners[0].FileId + '/';
                prevImgSrc += window.options.selectablebanners[0].FileName;
                bannerSelectContent += "    </select>\n                                        </div>\n                                        <div class=\"banner-select-preview\">\n                                            <img id=\"banner-preview-img\" src=\"" + prevImgSrc + "\" style=\"display: none;\" />\n                                        </div>\n                                    </div>";
                content += bannerSelectContent;
            }
        }
        if (window.options.selectablemergecodes) {
            var selectableMergeCodeContent = "<div class=\"merge-code-selector\" id=\"merge-code-select-container\">\n                                <div class=\"label\">\n                                    <span> Select a code: </span>\n                                </div>\n                                <div class=\"field\">\n                                    <select id=\"merge-code-select\">\n                                        <option>None</option>";
            for (var i = 0; i < window.options.selectablemergecodes.length; i++) {
                selectableMergeCodeContent += "<option>" + window.options.selectablemergecodes[i].Description + "</option>";
            }
            selectableMergeCodeContent += "</select>\n                                           </div>\n                                           </div>";
            content += selectableMergeCodeContent;
        }
        $('body').addClass('scroll-stop').append("\n            <div class=\"modal-outer\" id=\"" + id + "\">\n                <div class=\"modal-inner trib-message\">\n                    <h3>Enter Tribute Message</h3>\n                    <div class=\"msg-editor\"><textarea id=\"trib-msg-box\">" + $(el.currentTarget).find('input[name=mtNote]').val() + "</textarea></div>\n                    <span class=\"char-counter\"></span>\n                    " + content + "\n                    <div class=\"trib-controls\">\n                        <button id=\"trib-save\" class=\"trib-modal-button\" type=\"button\"><b>Save</b></button>\n                        <button id=\"trib-cancel\" class=\"trib-modal-button\" type=\"button\">Cancel</button>\n                    </div>\n                </div>\n            </div>");
        $('#banner-select').on('change', function () {
            if ($(this).val() === 'None') {
                $('#banner-preview-img').hide();
            }
            else {
                var selectedBannerName = $(this).val();
                var bannerObj = window.options.selectablebanners.filter(function (banner) { return banner.FileName == selectedBannerName; })[0];
                $('#banner-preview-img').attr('src', "/CSiDonate/File.aspx/" + bannerObj.FileId + "/" + bannerObj.FileName + "." + bannerObj.FileType);
                $('#banner-preview-img').show();
            }
        });
        $('#trib-msg-box').keyup(function (e) {
            var input = $(e.currentTarget);
            var len = input.val().length;
            $("#" + id).find('.char-counter').text(Math.min(len, MultiTrib.maxMsgLength) + " / " + MultiTrib.maxMsgLength).css('color', "" + (len >= MultiTrib.maxMsgLength ? 'red' : ''));
            if (len >= MultiTrib.maxMsgLength) {
                input.val(input.val().substr(0, MultiTrib.maxMsgLength));
                e.preventDefault();
                return false;
            }
            return true;
        });
        $('#trib-msg-box').keyup();
        $('#trib-cancel').click(function (e) {
            _this.closeModal(id);
            e.preventDefault();
            return false;
        });
        $('#trib-save').click(function (e) {
            var msg = $('#trib-msg-box').val();
            $(el.currentTarget).find('input[name=mtNote]').val(msg);
            _this.closeModal(id);
            $(el.currentTarget).parent().find('.trib-msg-preview').text(msg.length <= MultiTrib.previewLength ? msg : (msg.substring(0, MultiTrib.previewLength) + '...'));
            e.preventDefault();
            return false;
        });
        el.preventDefault();
        return false;
    };
    MultiTrib.prototype.openMemberSearch = function (el) {
        var _this = this;
        $(el.currentTarget).addClass('disabled');
        $.ajax({
            type: 'POST',
            url: options.mbr_lookup_url,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (d) { return _this.displayMemberSearchUi(d.d || d, el.currentTarget); }
        });
    };
    MultiTrib.prototype.displayMemberSearchUi = function (iqaDef, context) {
        var _this = this;
        $(context).removeClass('disabled');
        var id = "dialog-" + parseInt((Math.random() * 10000000).toString()).toString();
        $('body').addClass('scroll-stop').append("\n            <div class=\"modal-outer\" id=\"" + id + "\">\n                <div class=\"modal-inner trib-mbr-search\">\n                    <h3>Find A Tribute</h3>\n                </div>\n            </div>");
        if (this.isErrorNotDef(iqaDef)) {
            this.displayError(id, iqaDef, ErrorType.Load);
        }
        else {
            var searchArea = $('<div class="search-area" />');
            var allFilters = [];
            for (var i = 0; i < iqaDef.FilterSets.length; i++) {
                for (var j = 0; j < iqaDef.FilterSets[i].FilterCollection.length; j++) {
                    allFilters.push(iqaDef.FilterSets[i].FilterCollection[j]);
                }
            }
            var paramIndex_1 = 0;
            allFilters.forEach(function (f) {
                if (!f.IsUserProvided)
                    return;
                searchArea.append("\n<div class=\"field\">\n    <label>" + (f.HasPrompt ? f.Prompt : f.ColumnName + ' ' + f.CompareString) + "</label>\n    <input type=\"text\" name=\"parameter-" + paramIndex_1++ + "\" value=\"" + f.Value + "\" />\n</div>\n");
            });
            searchArea.append('<div class="buttons"><button type="button" id="mbr-search">Search</button><button type="button" id="mbr-cancel">Cancel</button></div>');
            // Support Search on Enter Press
            searchArea.find('input[name^=parameter]').keypress(function (kp) {
                if (kp.which === 13) {
                    $('#mbr-search').click();
                }
            });
            $("#" + id + " > .modal-inner").append(searchArea);
            $("#" + id + " #mbr-search").click(function (e) { return _this.performMemberSearch(id, e, context); });
            $("#" + id + " #mbr-cancel").click(function () { return _this.closeModal(id); });
        }
    };
    MultiTrib.prototype.performMemberSearch = function (id, e, context) {
        var _this = this;
        $("#" + id + " > .modal-inner").find('.results-area, .error-area').remove();
        var allInputs = $("#" + id + " .search-area .field input");
        if (allInputs.filter(function (_, e) { return $.trim($(e).val()).length === 0; }).length === allInputs.length) {
            this.displayError(id, { message: 'Please enter at least one search criteria.', severe: false, error: null }, ErrorType.Query);
            return;
        }
        $(e.currentTarget).prop('disabled', 'disabled');
        $("#" + id + " > .modal-inner .buttons").after('<div class="loading" style="text-align: center; width: 99%;"><img src="../images/hourglass.gif" alt="Loading" /></div>');
        $.ajax({
            type: 'POST',
            url: options.mbr_search_url,
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify({ parameters: this.getParameterArray(id) }),
            dataType: 'json',
            success: function (d) {
                $(e.currentTarget).prop('disabled', '');
                _this.displayResults(id, d.d, context);
            }
        });
    };
    MultiTrib.prototype.displayResults = function (id, d, context) {
        var _this = this;
        $("#" + id + " > .modal-inner").find('.loading').remove();
        if (this.isErrorNotData(d)) {
            this.displayError(id, d, ErrorType.Query);
        }
        else {
            var resultsArea = $('<div class="results-area"><table class="results"><thead><tr></tr></thead><tbody></tbody></table></div>');
            var displayCols = [];
            var idCol_1 = 0;
            var nameCol_1 = 0;
            var emailCol_1 = 0;
            for (var i = 0; i < d.columns.length; i++) {
                switch (d.columns[i].toUpperCase()) {
                    case 'ID':
                        idCol_1 = i;
                        break;
                    case 'NAME':
                        nameCol_1 = i;
                        break;
                    case 'EMAIL':
                    case 'E-MAIL':
                        emailCol_1 = i;
                        break;
                }
                if (MultiTrib.skipCols.indexOf(d.columns[i].toUpperCase()) > -1) {
                    continue;
                }
                displayCols.push(i);
                resultsArea.find('thead > tr').append("<th>" + d.columns[i] + "</th>");
            }
            d.rows.forEach(function (r) {
                var row = $("<tr class=\"result-row\" data-id=\"" + r[idCol_1] + "\" data-name=\"" + r[nameCol_1] + "\" data-email=\"" + r[emailCol_1] + "\" />");
                displayCols.forEach(function (i) {
                    row.append("<td>" + r[i] + "</td>");
                });
                resultsArea.find('tbody').append(row);
            });
            if (d.hasMore) {
                resultsArea.append("<p class=\"more-message\">Results are limited to " + d.rows.length + ". To see additional results, refine your search.</p>");
            }
            resultsArea.find('.result-row').click(function (e) { return _this.selectResultRow(e, id, context); });
            $("#" + id + " > .modal-inner").append(resultsArea);
        }
    };
    MultiTrib.prototype.selectResultRow = function (e, id, context) {
        // Turn off any future click handlers first - avoids a double-click
        $("#" + id + " > .modal-inner .results-area").find('.result-row').off('click');
        var tribRow = $(context).parents('.trib').first();
        tribRow.data('id', $(e.currentTarget).data('id'));
        tribRow.find('input[name=mtId]').val($(e.currentTarget).data('id'));
        tribRow.find('input[name=mtName]').hide()
            .after("<input type=\"text\" class=\"read-only\" value=\"" + $(e.currentTarget).data('name') + "\" disabled=\"disabled\" readonly=\"readonly\" />");
        tribRow.find('input[name=mtEmail]').prop('placeholder', $(e.currentTarget).data('email'));
        this.closeModal(id);
        this.refreshState();
    };
    MultiTrib.prototype.clearMembeSearch = function (el) {
        var tribRow = $(el.currentTarget).parents('.trib').first();
        tribRow.removeData('id');
        tribRow.find('input[name=mtId]').val('');
        tribRow.find('input.read-only').remove();
        tribRow.find('input[name=mtName]').show();
        tribRow.find('input[name=mtEmail]').prop('placeholder', 'someone@example.com');
        this.refreshState();
    };
    MultiTrib.prototype.getParameterArray = function (id) {
        var params = [];
        $("#" + id + " .search-area .field input").each(function (_, e) { return params.push($(e).val()); });
        return params;
    };
    MultiTrib.prototype.displayError = function (id, error, type) {
        var _this = this;
        var errorPanel = $("<div class=\"error-area\">\n                                  <div class=\"error-title\">" + (type === ErrorType.Load ? 'Oops! The Find a Tribute window didn\'t load correctly.' : 'Search Error') + "</div>\n                              </div>");
        if (error.severe) {
            errorPanel.append("<p class=\"error-details\">The message is: <em>" + error.message + "</em></p>\n                               <p class=\"error-message\">You can close this window using the button below. If this error persists, please contact your organization's headquarters.</p>\n                               <div class=\"buttons\">\n                                   <button type=\"button\" id=\"mbr-cancel\">Close</button>\n                               </div>");
        }
        else {
            errorPanel.append("<p class=\"error-details\"><em>" + error.message + "</em></p>");
        }
        $("#" + id + " > .modal-inner").append(errorPanel);
        $("#" + id + " #mbr-cancel").click(function () { return _this.closeModal(id); });
    };
    MultiTrib.prototype.closeModal = function (id) {
        $("#" + id).fadeOut({ complete: function () { return $("#" + id).remove(); } });
        $('body').removeClass('scroll-stop');
    };
    /**
     * Determines if the resulting object is an IIqaError.
     * @param obj The object to check.
     */
    MultiTrib.prototype.isErrorNotDef = function (obj) {
        return (obj.error !== undefined && obj.error) || obj.message !== undefined;
    };
    /**
     * Determines if the resulting object is an IIqaError.
     * @param obj The object to check.
     */
    MultiTrib.prototype.isErrorNotData = function (obj) {
        return (obj.error !== undefined && obj.error) || obj.message !== undefined;
    };
    MultiTrib.maxMsgLength = 250;
    MultiTrib.previewLength = 50;
    MultiTrib.skipCols = ['KEY_UNIFORMKEY', 'ID'];
    return MultiTrib;
}());

var Tokenizer = /** @class */ (function () {
    function Tokenizer() {
    }
    Tokenizer.setBluePayCredentials = function (info) {
        BluePay.setCredentials(info.accountId, info.apiSignature);
    };
    Tokenizer.createPaymentToken = function (app, success, paymentError, commError) {
        El.CreateRecurringCheckbox.is(':checked')
            ? this.setBluePayCredentials(options.recur)
            : this.setBluePayCredentials(options.single);
        var paymentData = null;
        if (El.CcButton.hasClass('active') && El.CcNumTextbox.val()) {
            paymentData = {
                PAYMENT_TYPE: 'CREDIT',
                CARD_ACCOUNT: El.CcNumTextbox.val().toString(),
                CARD_CVV2: El.CcCvv2Textbox.val().toString(),
                EXPMO: El.SelectedCcMonth.val().toString(),
                EXPYR: El.SelectedCcYear.val().toString(),
                NAME1: El.CcNameTextbox.val().toString(),
                MODE: options.mode
            };
            El.PaymentTypeField.val('C');
        }
        else if (El.AchButton.hasClass('active') && El.AchAccountNumTextbox.val()) {
            paymentData = {
                PAYMENT_TYPE: 'ACH',
                ACH_ACCOUNT: El.AchAccountNumTextbox.val().toString(),
                ACH_ROUTING: El.AchRoutingNumTextbox.val().toString(),
                NAME1: El.AchAccountNameTextbox.val().toString(),
                ACH_ACCOUNT_TYPE: El.IsAchCheckingEnabled ? 'C' : El.IsAchSavingsEnabled ? 'S' : El.IsAchGenLedgerEnabled ? 'G' : '',
                MODE: options.mode
            };
            El.PaymentTypeField.val('A');
        }
        try {
            BluePay.createToken(paymentData, function (data, error) {
                if (typeof error === 'undefined' && (data.STATUS === '1' || (data.STATUS.toUpperCase() === 'E' && data.MESSAGE.toUpperCase() === 'DUPLICATE'))) {
                    success(data);
                }
                else {
                    paymentError(data);
                }
            });
        }
        catch (ex) {
            commError(ex);
        }
    };
    return Tokenizer;
}());

/**
 * Utility methods and helper functions.
 */
var Utility = /** @class */ (function () {
    function Utility() {
    }
    /**
     * Adds the specified number of days to the date object, returning a new date object.
     * @param dateObj The date to manipulate.
     * @param num The number of days to add.
     */
    Utility.addDays = function (dateObj, num) {
        var date = new Date(dateObj.valueOf());
        date.setDate(date.getDate() + num);
        return date;
    };
    /**
     * Adds the specified number of months to the date object, returning a new date object.
     * @param dateObj The date to manipulate.
     * @param num The number of months to add.
     */
    Utility.addMonths = function (dateObj, num) {
        var currentMonth = dateObj.getMonth();
        dateObj.setMonth(dateObj.getMonth() + num);
        if (dateObj.getMonth() !== ((currentMonth + num) % 12)) {
            dateObj.setDate(0);
        }
        return dateObj;
    };
    /**
     * Adds the specified number of years to the date object, returning a new date object.
     * @param dateObj The date to manipulate.
     * @param num The number of years to add.
     */
    Utility.addYears = function (dateObj, num) {
        return new Date(dateObj.setFullYear(new Date().getFullYear() + num));
    };
    Utility.verifyOrShowOptionsErrors = function () {
        if (typeof options.single_types === 'undefined') {
            console.error('Variable options.single_types is not defined.');
        }
        if (typeof options.recur_types === 'undefined') {
            console.error('Variable options.recur_types is not defined.');
        }
        if (typeof options.ach_off === 'undefined') {
            console.error('Variable options.ach_off is not defined.');
        }
        if (typeof options.cc_off === 'undefined') {
            console.error('Variable options.cc_off is not defined.');
        }
        if (options.cc_off && options.ach_off) {
            console.error('Fatal Error: Both ACH and CC forms cannot be off.');
        }
        if (typeof options.capt_url === 'undefined' || !options.capt_url.length) {
            console.error('Variable options.capt_url is not defined.');
        }
        if (typeof options.aba_url === 'undefined' || !options.aba_url.length) {
            console.error('Variable options.aba_url is not defined.');
        }
        if (typeof options.buttonPost === 'undefined' || !options.buttonPost.length) {
            console.error('Variable options.aba_url is not defined.');
        }
        if (typeof options.buttonId === 'undefined' || !options.buttonId.length) {
            console.error('Variable options.aba_url is not defined.');
        }
        if (options.security && (typeof options.captchaPubKey === 'undefined' || !options.captchaPubKey.length)) {
            console.error('Captcha is enabled, but no key was provided.');
        }
    };
    Utility.isStateBasedCountry = function (c) {
        return c === 'united states' ||
            c === 'united states of america' ||
            c === 'us' ||
            c === 'usa' ||
            c === 'canada' ||
            c === 'australia';
    };
    Utility.validateAmountTextbox = function () {
        if (El.AmountTextbox.val() >= window.options.minimumdonationamount) {
            return true;
        }
        return false;
    };
    return Utility;
}());

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Validation = /** @class */ (function () {
    function Validation(app) {
        $.validator.addMethod('amount', function () {
            return Utility.validateAmountTextbox();
        });
        // Custom validator to check for a unique value amongst a single element by name.
        $.validator.addMethod('unique', function (value, element) {
            var timeRepeated = 0;
            if (value && value.length) {
                $("input[name=" + element.name + "]").each(function () {
                    if ($(this).val() === value) {
                        timeRepeated++;
                    }
                });
            }
            return timeRepeated === 1 || timeRepeated === 0;
        });
        this.validator = El.Form.validate({
            submitHandler: function () { return app.submitDonation(); },
            errorContainer: '#valErrors',
            errorPlacement: function (er) { return $('#valErrors').append(er); }
        });
    }
    Validation.prototype.getCommonValidationRules = function () {
        return {
            tbOtherAmount: {
                required: true,
                number: true,
                amount: true
            },
            ddlFund: {
                required: '#ddlFund:visible'
            },
            tbFN: {
                required: true,
                maxlength: 20
            },
            tbLN: {
                required: true,
                maxlength: 30
            },
            tbAdd1: {
                required: true
            },
            tbCity: {
                required: true
            },
            ddlStateProvince: {
                required: function (_) { return Utility.isStateBasedCountry($('select[id$=ddlCountry]').val().trim().toLowerCase()); }
            },
            tbPostalCode: {
                required: true,
                pattern: '[0-9A-Za-z -]{4,10}'
            },
            tbEmail: {
                required: true,
                email: true
            },
            tbPhone: {
                required: true,
                pattern: '[0-9 ()+-]{7,23}'
            },
            mtEmail: {
                unique: true
            }
        };
    };
    Validation.prototype.getCommonMessages = function () {
        return {
            tbOtherAmount: {
                required: 'Please enter a donation amount.',
                number: 'Please enter a donation amount in the format "10" or "12.34".',
                amount: 'Please enter a donation amount of at least $' + window.options.minimumdonationamount.toFixed(2)
            },
            ddlFund: 'Please select a fund.',
            tbFN: 'Please enter your first name.',
            tbLN: 'Please enter your last name.',
            tbAdd1: 'Please enter your street address.',
            tbCity: 'Please enter your city.',
            ddlStateProvince: 'Please select your state/province.',
            tbPostalCode: {
                required: 'Please enter your ZIP/Postal code.',
                pattern: 'Please enter the ZIP/Postal code in the correct format.'
            },
            tbEmail: {
                required: 'Please enter your e-mail address.',
                email: 'Please enter a valid e-mail address in the format "name@example.com".'
            },
            tbPhone: {
                required: 'Please enter your phone number.',
                pattern: 'Please enter a valid phone number.'
            },
            mtEmail: {
                unique: 'There are one or more duplicate tribute notification e-mails. Please ensure all e-mail addresses are unique.'
            }
        };
    };
    Validation.prototype.enableCcValidation = function () {
        this.validator.resetForm();
        this.validator.settings.rules = __assign(__assign({}, this.getCommonValidationRules()), { tbCardNumber: {
                required: true,
                pattern: '[0-9 ]{17,20}'
            }, tbCSC: {
                required: true,
                minlength: 3,
                maxlength: 4,
                digits: true
            }, ddlMonth: {
                required: true
            }, ddlYear: {
                required: true
            }, tbCardName: {
                required: true
            } });
        this.validator.settings.messages = __assign(__assign({}, this.getCommonMessages()), { tbCardNumber: 'Please enter your credit card number.', tbCSC: 'Please enter your card security code / CVV2.', ddlMonth: 'Please enter your credit card expiration month.', ddlYear: 'Please enter your credit card expiration year.', tbCardName: 'Please enter the name on your card.' });
    };
    Validation.prototype.enableAchValidation = function () {
        this.validator.resetForm();
        this.validator.settings.rules = __assign(__assign({}, this.getCommonValidationRules()), { tbAccountNumber: {
                required: true,
                minlength: 6,
                maxlength: 18,
                digits: true
            }, tbRoutingNumber: {
                required: true,
                minlength: 9,
                maxlength: 9,
                digits: true
            }, tbAccountName: {
                required: true
            } });
        this.validator.settings.messages = __assign(__assign({}, this.getCommonMessages()), { tbAccountNumber: {
                required: 'Please enter your account number.',
                minlength: 'Account number must be at least 6 digits.',
                maxlength: 'Account number cannot exceed 18 digits.'
            }, tbRoutingNumber: {
                required: 'Please enter your routing number.',
                minlength: 'Routing number must be 9 digits.',
                maxlength: 'Routing number must be 9 digits.'
            }, tbAccountName: 'Please enter the name on your account.' });
    };
    return Validation;
}());

/// <reference path="CSiDonate.Definitions.ts" />
var StateSaver = /** @class */ (function () {
    function StateSaver() {
    }
    StateSaver.prototype.checkForCachedForm = function () {
        //number of milliseconds in 30 minutes
        var timeout = 30 * 60 * 1000;
        var form = JSON.parse(window.localStorage.getItem('formData'));
        if (form) {
            var now = Date.now();
            var formDate = new Date(form.date).valueOf();
            var difference = now - formDate;
            if (form.key === window.options.tpluid) {
                if ((difference - timeout) < 0) {
                    return true;
                }
                //clear the cached form if stored for more than 30 minutes.
                else {
                    this.clearState();
                }
            }
        }
        return false;
    };
    StateSaver.prototype.loadCachedForm = function () {
        var multiTrib = new MultiTrib();
        var form = JSON.parse(window.localStorage.getItem('formData'));
        if (form !== undefined && form !== null) {
            //only load cached values if the same template is being loaded
            if (form.key === window.options.tpluid) {
                var kvp = JSON.parse(JSON.stringify(form.values));
                var multiTribVals = kvp.filter(function (element) { return element.key === 'mtEmail' || element.key === 'mtName' || element.key === 'mtNote' || element.key === 'mtId'; });
                for (var i = 0; i < kvp.length; i++) {
                    var key = kvp[i].key;
                    var val = kvp[i].value;
                    if (typeof (val) === 'string') {
                        var ele = $('input[name="' + key + '"]');
                        if (ele.length > 1) {
                            $('input[value="' + val + '"]').prop('checked', true);
                        }
                        if (ele.length) {
                            $(ele).val(val);
                        }
                        else if ($('select[name="' + key + '"]').length) {
                            ele = $('select[name="' + key + '"]');
                            $(ele).val(val);
                        }
                        else if ($('textarea[name="' + key + '"]').length) {
                            ele = $('textarea[name="' + key + '"]');
                            $(ele).val(val);
                        }
                        $(ele).change();
                    }
                    if (typeof (val) === 'boolean') {
                        $('input[name="' + key + '"]').prop('checked', val);
                        $('input[name="' + key + '"]').change();
                    }
                }
                var names = multiTribVals.filter(function (element) { return element.key === 'mtName'; });
                var emails = multiTribVals.filter(function (element) { return element.key === 'mtEmail'; });
                var notes = multiTribVals.filter(function (element) { return element.key === 'mtNote'; });
                var ids = multiTribVals.filter(function (element) { return element.key === 'mtId'; });
                for (var i = 0; i < (names.length) - 1; i++) {
                    multiTrib.addMultiTribute();
                }
                if (names.length === emails.length) {
                    for (var i = 0; i < (names.length); i++) {
                        var nameEle = $('input[name="mtName"]').get(i);
                        $(nameEle).val(names[i].value);
                        var emailEle = $('input[name="mtEmail"]').get(i);
                        $(emailEle).val(emails[i].value);
                        var noteEle = $('input[name="mtNote"]').get(i);
                        $(noteEle).val(notes[i].value);
                        $(noteEle).parent().parent().find('.trib-msg-preview').text(notes[i].value.length <= multiTrib.getPreviewLength() ? notes[i].value : (notes[i].value.substring(0, multiTrib.getPreviewLength()) + '...'));
                        var idEle = $('input[name="mtId"]').get(i);
                        $(idEle).val(ids[i].value);
                    }
                }
            }
        }
    };
    StateSaver.prototype.clearState = function () {
        if (window.localStorage.getItem('formData')) {
            window.localStorage.removeItem('formData');
        }
    };
    StateSaver.prototype.saveState = function () {
        try {
            var form = {};
            form.key = window.options.tpluid;
            var kvp = new Array();
            $('.form-container input[type=text], .form-container input[type=email], .form-container input[type=number], .form-container select, .form-container input[type=tel], .form-container textarea, .form-container input[name=mtId], .form-container input[name=mtNote]')
                .each(function (_, el) {
                if (!$(el).parents('#payment').length) {
                    var key = $(el).attr('name');
                    var val = $(el).val();
                    kvp.push({ 'key': key, 'value': val });
                }
            });
            $('.form-container input[type=checkbox]')
                .each(function (_, el) {
                if (!$(el).parents('#payment').length) {
                    var key = $(el).attr('name');
                    var val = $(el).prop('checked');
                    kvp.push({ 'key': key, 'value': val });
                }
            });
            $('.form-container input[type=radio]')
                .each(function (_, el) {
                if (!$(el).parents('#payment').length && $(el).is(':checked') && !$(el).parents('#amtChooser').length) {
                    var key = $(el).attr('name');
                    var val = $(el).val();
                    kvp.push({ 'key': key, 'value': val });
                }
            });
            $('#CustomQuestionContainer input[type=text], #CustomQuestionContainer input[type=email], #CustomQuestionContainer select')
                .each(function (_, el) {
                var key = $(el).attr('name');
                var val = $(el).val();
                kvp.push({ 'key': key, 'value': val });
            });
            $('#CustomQuestionContainer input[type=checkbox]')
                .each(function (_, el) {
                var key = $(el).attr('name');
                var val = $(el).prop('checked');
                kvp.push({ 'key': key, 'value': val });
            });
            $('#CustomQuestionContainer input[type=radio]')
                .each(function (_, el) {
                if ($(el).is(':checked')) {
                    var key = $(el).attr('name');
                    var val = $(el).val();
                    kvp.push({ 'key': key, 'value': val });
                }
            });
            $('.donation-options input[type=text], .donation-options input[type=email], .donation-options input[type=number], .donation-options select')
                .each(function (_, el) {
                var key = $(el).attr('name');
                var val = $(el).val();
                kvp.push({ 'key': key, 'value': val });
            });
            $('.donation-options input[type=checkbox]')
                .each(function (_, el) {
                var key = $(el).attr('name');
                var val = $(el).prop('checked');
                kvp.push({ 'key': key, 'value': val });
            });
            $('.donation-options input[type=radio]')
                .each(function (_, el) {
                if ($(el).is(':checked')) {
                    var key = $(el).attr('name');
                    var val = $(el).val();
                    kvp.push({ 'key': key, 'value': val });
                }
            });
            form.values = kvp;
            form.date = new Date().toUTCString();
            window.localStorage.setItem('formData', JSON.stringify(form));
        }
        catch (exception) {
            console.log(exception);
        }
    };
    return StateSaver;
}());