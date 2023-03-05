export function getCreatedAt(): string {

    const d = new Date();

    let month = `${d.getMonth() + 1}`;
    let day = `${d.getDate()}`;
    let year = `${d.getFullYear()}`;
    let hours = `${d.getHours()}`;
    let minutes = `${d.getMinutes()}`;

    if (month.length < 2) {
        month = `0${month}`;
    }
    if (day.length < 2) {
        day = `0${day}`;
    }

    return `${[day, month, year].join('.')} в ${hours}:${minutes}`;
}

export function getCreatedAtHours(str:string): string {
    return str.split('в')[1];
}
