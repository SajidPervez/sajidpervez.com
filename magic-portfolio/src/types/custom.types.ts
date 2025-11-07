export type Book = {
  title: string;
  author: string;
  cover: {
    src: string;
    alt: string;
  };
  comments: string;
  url: string;
  status: "to-read" | "reading" | "read";
};

export type Podcast = {
  name: string;
  host: string;
  description: string;
  cover: {
    src: string;
    alt: string;
  };
  url: string;
};

export type MerchItem = {
  name: string;
  description: string;
  cover: {
    src: string;
    alt: string;
  };
  purchaseLinks: Array<{
    platform: string;
    url: string;
  }>;
};
