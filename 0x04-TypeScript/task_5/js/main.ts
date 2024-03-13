
interface MajorCredits {
    credits: number;
    brand: "major";
}

interface MinorCredits {
    credits: number
    brand: "minor";
}

function sumMajorCredits(sb1: MajorCredits, sb2: MajorCredits): number {
    return sb1.credits + sb2.credits;
}

function sumMinorCredits(sb1: MinorCredits, sb2: MinorCredits): number {
    return sb1.credits + sb2.credits;
}