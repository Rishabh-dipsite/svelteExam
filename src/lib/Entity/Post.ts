export interface PostEntity {
    title: string;
    description: string;
    comments: Comment[];
}

interface Comment{
    comment: string;
    user: string;
}