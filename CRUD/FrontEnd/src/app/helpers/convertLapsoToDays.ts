export const convertLapsoToDays = (lapso: string): number => {
    switch (lapso) {
        case 'Diario':
            return 1;
        case 'Semanal':
            return 7;
        case 'Quincenal':
            return 15;
        case 'Mensual':
            return 30;
        default:
            return 0;
    }
}

export const convertDaysToLapso = (days: number): string => {
    switch (days) {
        case 1:
            return 'Diario';
        case 7:
            return 'Semanal';
        case 15:
            return 'Quincenal';
        case 30:
            return 'Mensual';
        default:
            return 'Desconocido';
    }
}
