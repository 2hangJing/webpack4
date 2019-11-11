
class Reload {

    apply (compiler) {
        compiler.hooks.emit.tap("Reload", (compilation) => {
            Object.keys(compilation.assets).forEach((data)=> {
             
                if(data == "add.js"){
                    
                    let content = compilation.assets[data].source();

                    content += "let ev = new EventSource('/webpackReload');ev.addEventListener('message', function (e) {e.data == 'true' && window.location.reload()}, false);";
                    
                    compilation.assets[data] = {
                        source(){
                            return content
                        },
                        size(){
                            return content.length
                        }
                    }
                }
            });
        })
    }
}

module.exports = Reload;