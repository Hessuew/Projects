function showTcdSurveyModal(options) {
    var insertTcdSurveyModal;
    var TcdSurveybackdrop;
    var TcdSurveyModal;
    var TcdSurveyDiv1;

    //Divin teko, johon modaali kiinnitetään
    insertTcdSurveyModal = document.createElement('div');
    insertTcdSurveyModal.classList.add('insertTcdSurveyModal');
    //Skaalautuvuus ja kaikki tyyli määrittelyt
    insertTcdSurveyModal.innerHTML = '<style>.TcdSurveyheaderH3{text-align: center; display: block;font-size: 1.17em;margin-top: 1em;margin-bottom: 1em;margin-left: 0;margin-right: 0;font-weight: bold;}.TcdSurveyheaderH2{ text-align: center; display: block;font-size: 1.5em;margin-top: 0.83em;margin-bottom: 0.83em;margin-left: 0;margin-right: 0; font-weight: bold;}.TcdSurveyXbtn {width: 35px; height: 35px;border-radius: 10px;border: solid #399FCA; background-color: #399FCA; color: white; box-shadow: none; align-self: right; font-size: 16px; font-weight: 600;}.TcdSurveyYesbtn{ border: solid #399FCA; border-radius: 5px; background-color: #399FCA; color: white; margin: 7px; height: 30px;  width: 65px; font-size: 16px; font-weight: 600;}.TcdSurveyNobtn{border: solid #399FCA; border-radius: 5px; background-color: #399FCA; color: white; height: 30px; width: 55px; font-size: 16px; font-weight: 600;}.TcdSurveyModal{display: none; font-family: sans-serif; position: fixed; z-index: 200; left: 25%; width: 50%; height: 223px; box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.4); padding: 1rem; padding: 10px; text-align: right; background-color: #399FCA; color: white; border-radius: 15px;;}.TcdSurveybackdrop {position: fixed; width: 100%; height: 100%; top: 0; left: 0; background: rgba(0, 0, 0, 0.5); z-index: 100;;}.TcdSurveyXbtn:hover, .TcdSurveyYesbtn:hover, .TcdSurveyNobtn:hover{ background-color: #5eb1d4; border-color: #5eb1d4; } .TcdSurveyXbtn:active, .TcdSurveyYesbtn:active, .TcdSurveyNobtn:active{ background-color: #5eb1d4; border-color: white; transform: translateY(4px); } @media screen and (max-width: 1628px){.TcdSurveyModal{height: 250px;}}@media screen and (max-width: 838px){.TcdSurveyheaderH2{font-size: 18px;}.TcdSurveyheaderH3{font-size: 16px;}}@media screen and (max-width: 542px){.TcdSurveyModal {height: 250px;padding: 0px;left: 2%;right: 2%;width: auto;}}.TcdSurveyModal-actions{padding: 0 5% 0 5%; width: 90%;border-radius: 10px;text-align: center; background-color: white; height: 44px;}</style>';

    //Backdrop: tausta
    var TcdSurveybackdrop = document.createElement('div');
    TcdSurveybackdrop.classList.add('TcdSurveybackdrop');
    insertTcdSurveyModal.appendChild(TcdSurveybackdrop);

    //Modaali
    TcdSurveyModal = document.createElement('div');
    TcdSurveyModal.classList.add('TcdSurveyModal');

    //Tekstit sisältävä div
    TcdSurveyDiv1 = document.createElement('div');
    TcdSurveyModal.classList.add('TcdSurveyDiv1');
    TcdSurveyModal.appendChild(TcdSurveyDiv1);

    //X-button
    var TcdSurveyXButton = document.createElement('button');
    TcdSurveyXButton.setAttribute('type', 'button');
    TcdSurveyXButton.classList.add('TcdSurveyXbtn');
    TcdSurveyXButton.textContent = 'X';
    TcdSurveyXButton.addEventListener('click', function () {
        setCookie("TcdSurveyCookie", options.cookieId, options.cookieDays1);
        closeTcdSurveyModal()
    });
    TcdSurveyDiv1.appendChild(TcdSurveyXButton);

    //Headertext
    var TcdSurveyModalHeading = document.createElement('p');
    TcdSurveyModalHeading.classList.add('TcdSurveyheaderH2');    
    TcdSurveyModalHeading.textContent = options.text.headerText;
    TcdSurveyDiv1.appendChild(TcdSurveyModalHeading);
    
    //Bodytext
    var TcdSurveyModalBody = document.createElement('p');
    TcdSurveyModalBody.classList.add('TcdSurveyheaderH3');
    TcdSurveyModalBody.textContent = options.text.bodyText;
    TcdSurveyDiv1.appendChild(TcdSurveyModalBody);

    //Buttonit sisältävä div
    var TcdSurveyModalActionsContainer = document.createElement('div');
    TcdSurveyModalActionsContainer.classList.add('TcdSurveyModal-actions');
    TcdSurveyModal.appendChild(TcdSurveyModalActionsContainer);

    //Kyllä-button
    var TcdSurveyYesButton = document.createElement('button');
    TcdSurveyYesButton.setAttribute('type', 'button');
    TcdSurveyYesButton.classList.add('TcdSurveyYesbtn');
    TcdSurveyYesButton.attributes.href = options.surveyLink;
    TcdSurveyYesButton.textContent = options.text.YesbuttonText;
    TcdSurveyYesButton.addEventListener('click', function () {
        setCookie("TcdSurveyCookie", options.cookieId, options.cookieDays2);
        window.open(options.surveyLink);
        closeTcdSurveyModal()
    });
    TcdSurveyModalActionsContainer.appendChild(TcdSurveyYesButton);

    //Ei-button
    var TcdSurveyNoButton = document.createElement('button');
    TcdSurveyNoButton.setAttribute('type', 'button');
    TcdSurveyNoButton.classList.add('TcdSurveyNobtn');
    TcdSurveyNoButton.textContent = options.text.NoButtonText;
    TcdSurveyNoButton.addEventListener('click', function () {
        setCookie("TcdSurveyCookie", options.cookieId, options.cookieDays2);
        closeTcdSurveyModal()
    });
    TcdSurveyModalActionsContainer.appendChild(TcdSurveyNoButton);

    //Lisätään pohja-div sivun alkuun
    insertTcdSurveyModal.appendChild(TcdSurveyModal);
    var body = document.getElementsByTagName("body")[0];
    body.insertBefore(insertTcdSurveyModal, body.firstChild);

    //Modaalin sulkemis toiminto
    function closeTcdSurveyModal() {
        if (TcdSurveybackdrop) {
            TcdSurveybackdrop.remove();
        }
        if (TcdSurveyModal) {
            TcdSurveyModal.remove();
        }
    }
}
//Cookien teko
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//Cookien haku
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
//Cookien tarkistus
function checkCookie(options) {
    setTimeout(function () {
        var tcdsurveycookie = getCookie("TcdSurveyCookie");
        var arr1 = tcdsurveycookie.split(",");
        var arr2 = options.cookieId.split(",");
        var FoundcookieId = false;

        if(arr1.length !== arr2.length)
            FoundcookieId = true;
        for(var i = arr1.length; i--;) {
            if(arr1[i] !== arr2[i])
                FoundcookieId = true;
        }

        if (arr1.length == 0 || FoundcookieId ) {
            showTcdSurveyModal(options);
            document.getElementsByClassName("TcdSurveyModal")[0].style.display = "block";
        }
    }, options.setTimeouttime);
}
function checkCookie(options) {
    setTimeout(function () {
        var tcdsurveycookie = getCookie("TcdSurveyCookie");
        var arr1 = tcdsurveycookie.split(",");
        var arr2 = options.cookieId.split(",");
        var FoundcookieId = false;

        if(arr1.length !== arr2.length)
            FoundcookieId = true;
        for(var i = arr1.length; i--;) {
            if(arr1[i] !== arr2[i])
                FoundcookieId = true;
        }

        if (arr1.length == 0 || FoundcookieId ) {
            showTcdSurveyModal(options);
            document.getElementsByClassName("TcdSurveyModal")[0].style.display = "block";
        }
    }, options.setTimeouttime);
} 
/*
function checkCookie(options) {
    setTimeout(function () {
        var tcdsurveycookie = getCookie("TcdSurveyCookie");
        var arr1 = tcdsurveycookie.split(";");

        if (arr1.length == 0 || arr1.indexOf(options.cookieId) < 0) {
            arr1.push("");
            options.cookieId = arr1.join(";");
            console.log(options.cookieId);
            showTcdSurveyModal(options);
            document.getElementsByClassName("TcdSurveyModal")[0].style.display = "block";
        }
    }, options.setTimeouttime);
}
*/