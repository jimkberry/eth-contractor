

function setContractFunction(fName)
{
    $("#contract_func_btn").html("Function: " + fName);   
    
};

function setFuncList(funcs)
{
    let fList = funcs.map( (f) => 
        '<li class="mdl-menu__item" onClick="setContractFunction(\'' 
        + f + '\')">' + f + '</li>' ).join('');
    
    $("#contract_func_list").html(fList); 
  
}

function setContract(cName)
{
    $("#contract_menu_btn").html("Contract: " + cName);
    let abi = contractABIs[cName];
    let sigs = funcList(abi);
    setFuncList(sigs);
    setContractFunction(sigs[0]);
    
};




    

        