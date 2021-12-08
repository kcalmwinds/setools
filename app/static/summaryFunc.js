
function updateOut(){

    let summaryOut = `======================================================================
Summary:

${summary()}

Current Action:

${currentAction()}

Next Action:

${nextAction()}

Next Contact:

${nextContact()}

======================================================================`;
    document.getElementById(`resultsOut`).innerText = summaryOut;

};

function summary(){
    return document.getElementById(`summaryInput`).value;
};

function currentAction(){
    return document.getElementById(`currentActionInput`).value;
};

function nextAction(){
return document.getElementById(`nextActionInput`).value;
};

function nextContact(){
    return document.getElementById(`nextContactInput`).value;
};

function copyToClipboard(){
    navigator.clipboard.writeText(document.getElementById(`resultsOut`).innerText);
};

function resetForm(){
    document.getElementById(`summaryInput`).value = ``;
    document.getElementById(`currentActionInput`).value = ``;
    document.getElementById(`nextActionInput`).value = ``;
    document.getElementById(`nextContactInput`).value = ``;
    updateOut()
};

resetForm()