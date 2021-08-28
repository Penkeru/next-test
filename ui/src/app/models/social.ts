export enum SocialType {
    Facebook = 'facebook',
    Linkedin = 'linkedin',
    Twitter = 'twitter',
    Instagram = 'instagram',
    Youtube = 'youtube',
}

export interface SocialOption {
    type: SocialType;
    title: string;
    url: string;
}