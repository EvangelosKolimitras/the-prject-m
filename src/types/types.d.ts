declare namespace BioNS {
    interface Bio {
        name: string;
        lastname: string;
        title: string;
        city: string;
        country: string;
        emails: Emails;
        studied: Studied[];
        fields: string[];
        social: Social;
        about_me: string;
        avatarURL: `https://${string}`
    }

    interface Social {
        facebook: string;
        instagram: string;
        px500: string;
        photoCrowd: string;
        photoContest: string;
    }

    interface Studied {
        level: string;
        major: string;
        college: string;
        city: string | undefined;
        country: string | undefined;
    }

    interface Emails {
        outook: Outook;
    }

    interface Outook {
        email: string;
    }
}

declare namespace Pexels {
    interface Response {
        id: number;
        width: number;
        height: number;
        url: string;
        photographer: string;
        photographer_url: string;
        photographer_id: number;
        avg_color: string;
        src: Src;
        liked: boolean;
    }

    interface Src {
        original: string;
        large2x: string;
        large: string;
        medium: string;
        small: string;
        portrait: string;
        landscape: string;
        tiny: string;
    }
}