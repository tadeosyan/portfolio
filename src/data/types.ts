export interface LinkTypes {
    id: number;
    name: string;
    icon: JSX.Element;
    path: string;
}

export interface PersonalInfo {
    id: number;
    title: string;
    description: string;
}

export interface Stats {
    id: number;
    no: string;
    title: string;
}

export interface ResumeEntry {
    id: number;
    category: string;
    icon: JSX.Element;
    year: string;
    title: string;
    desc: string;
}

export interface Skill {
    id: number;
    title: string;
    percentage: number;
}

export type PortfolioDetails = {
    id: number;
    icon?: JSX.Element;
    title: string;
    desc: string;
};

export interface PortfolioItemTypes {
    id: number;
    img: string;
    title: string;
    details: PortfolioDetails[];
}

export interface Theme {
    id: number;
    img: string;
    color: string;
}