function goToActivitySendTab() {
    var pageButtonArray = document.getElementsByClassName("artdeco-button__text");
    let buttonIndex = 0;
    while(buttonIndex < pageButtonArray.length){
        if(pageButtonArray[buttonIndex].innerText === 'Connect'){
            pageButtonArray[buttonIndex].click();
            setTimeout(function() {
                 var overLaySendBtn = document.getElementsByClassName("artdeco-button artdeco-button--2 artdeco-button--primary ember-view ml1");
                 if(overLaySendBtn){ overLaySendBtn[0].click();}
            }, 500);
            break;
          }
        buttonIndex++;
    }
}
goToActivitySendTab();

