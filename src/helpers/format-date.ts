export const formatDate = ( date: string ) => {
    const newDate = new Date( date );
    return newDate.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })
}