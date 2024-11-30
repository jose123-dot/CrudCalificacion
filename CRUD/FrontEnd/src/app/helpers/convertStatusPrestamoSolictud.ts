export const convertStatusPrestamoSolictud = (status: number): string => {
    switch (status) {
        case 0:
            return 'Rechazado';
        case 1:
            return 'Pendiente';
        case 2:
            return 'Aceptado';
        default:
            return 'Desconocido';
    }
}
