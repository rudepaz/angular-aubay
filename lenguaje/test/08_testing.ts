export function factorial(n: number) :number {
    if (n < 0){
        throw new Error(`Numero Negativo`)
    }else if (parseInt(String(n)) !== parseFloat(String(n))) {
        throw new Error(`Numero con decimales`)
    }
    
    if (n <= 1 ){
        return 1
    }
    return n * factorial (n-1)
}