import Web3 from 'web3';

let web3 = new Web3(); // new Web3.providers.HttpProvider("http://localhost:8545")


let fnName = function(fn) {
    //return (fn.name ? fn.name : "<Constructor>");
    return ((fn.type === "constructor") ? "<Constructor>" : fn.name);    
} 



// Function sig given an ABI entry
let fnSig = function(fn) {
    return fnName(fn) + "("+ (fn.inputs ? (fn.inputs.map( (i) => i.type).join(',')) : '') + ")"; 
};


let ContractInfo = function(abis, cName)
{
  
    this.name = cName;
    this.abi = abis[cName];
    if (this.abi)
    {
        this.funcSigs = this.abi.map( (fn) => ["function","constructor"].indexOf(fn.type) !== -1 ? fnSig(fn) : null )
                                .filter((sig) => {return sig!==null} ).sort();   
    
        // Keyed by signature
        this.funcSpecs = this.abi.reduce( function(obj, fn) {
            if (["function","constructor"].indexOf(fn.type) !== -1) 
              obj[fnSig(fn)] = fnName(fn) + '(' 
                 + (fn.inputs ? (fn.inputs.map( (i) => i.type + ' ' + i.name).join(', ')) : '')
                 +')';
            return obj;
        }, {});    
                
        // Keyed by signature
        this.inputSpecs = this.abi.reduce( function(obj, fn) {
            if (["function","constructor"].indexOf(fn.type) !== -1)
                obj[fnSig(fn)] = fn.inputs;
            return obj;
        }, {});    
        
        this.inst = new web3.eth.Contract(this.abi);
    }
}


export { ContractInfo, web3};


        