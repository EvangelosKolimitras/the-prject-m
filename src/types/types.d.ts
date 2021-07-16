export namespace BioNS {
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