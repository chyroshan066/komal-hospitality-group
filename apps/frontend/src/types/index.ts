export interface Children {
    children: React.ReactNode;
}

export interface ClassName {
    className?: string
}

export interface Title {
    title?: string;
}

export interface Message {
    message: string;
}

export interface IsVisible {
    isVisible: boolean;
}

export interface AlertState extends Title, Message, IsVisible {
    type: "success" | "error";
}

export interface Name {
    name: string;
}

export interface Description {
    description: string;
}

export interface Email {
    email: string;
}

interface Text {
    text: string;
}

interface ImgSrc {
    imgSrc: string;
}

interface Href {
    href: string;
}

export interface NavLink extends Name, Href {}

export interface Facility extends Title, Description, ClassName {
    icon: string;
}

export interface Testimonial extends ImgSrc, Name {
    date: string;
    comment: string;
}

export interface OnToggleNav {
    onToggleNav: () => void;
}

// interface subtitle used once in TitleHeader
// interface delay used once in TitleHeader
// interface animation used once in TitleHeader
// interface title2 used once in TitleHeader