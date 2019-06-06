export function submitTimeout(msecs, promise) {
  
  return new Promise(function(resolve, reject) {
    
    setTimeout(() => {
      console.log(promise, 'called');
      
     try {
       console.log(promise, 'resolving');
        resolve (promise)
      }
      catch (e) {
        console.log(promise, 'error');
        return reject(e)
      }
      
    }, msecs);
    
  });
  
}

  