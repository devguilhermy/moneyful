export function priceFormatter(value: number) {
    let formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',

        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    return formatter.format(value); /* $2,500.00 */
}

export function dateFormatter(date: Date) {
    // let options = {
    //     hour: ,
    //     minute: 'numeric',
    //     second: 'numeric',
    //     timeZone: 'Australia/Sydney',
    //     timeZoneName: 'short',
    // };
    let formatter = new Intl.DateTimeFormat('pt-br', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZone: 'America/Sao_Paulo',
    });

    return formatter.format(date); /* $2,500.00 */
}
