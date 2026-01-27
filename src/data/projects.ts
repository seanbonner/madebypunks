import { PunksData } from "@/types";

/**
 * Made by Punks - CryptoPunks Project Directory
 *
 * This directory features projects that celebrate, extend, or build
 * upon the CryptoPunks ecosystem. Projects should involve Punks directly
 * through art, tools, derivatives, or community experiences.
 *
 * To add your project:
 * 1. Find the punk ID associated with your project
 * 2. Add your project following the structure below
 * 3. Submit a PR!
 */

export const punksData: PunksData = {
  // Larva Labs / Yuga Labs Projects
  0: {
    id: 0,
    name: "Larva Labs",
    twitter: "larvalabs",
    projects: [
      {
        id: "cryptopunks-app",
        name: "CryptoPunks",
        description:
          "The original CryptoPunks marketplace and explorer.",
        thumbnail: "https://pbs.twimg.com/profile_images/1506332416847269890/OJ8gQuG2_400x400.png",
        url: "https://cryptopunks.app/",
        launchDate: "2017-06-23",
        tags: ["Marketplace", "Explorer", "Official"],
        twitter: "cryptopaboryszofficial",
      },
      {
        id: "brand-hub",
        name: "CryptoPunks Brand Hub",
        description:
          "An archive and living source for project info and initiatives.",
        thumbnail: "https://pbs.twimg.com/profile_images/1752127331748163584/ndmVfRhj_400x400.jpg",
        url: "https://hub.cryptopunks.app/",
        launchDate: "2023-01-01",
        tags: ["Brand", "Archive", "Official"],
        twitter: "yugalabs",
      },
    ],
  },

  // Gwendall's Projects
  1: {
    id: 1,
    name: "Gwendall",
    twitter: "gwendall",
    projects: [
      {
        id: "punkcam",
        name: "PunkCam",
        description: "Take selfies with your punks.",
        thumbnail: "https://punk.cam/logo.png",
        url: "https://punk.cam",
        launchDate: "2023-06-01",
        tags: ["Selfie", "Fun", "AR"],
        twitter: "PUNK_CAM",
      },
      {
        id: "punkmaker",
        name: "PunkMaker",
        description: "Make your own punk with the original 24x24 pixel art style.",
        thumbnail: "https://punkmaker.xyz/logo.png",
        url: "https://punkmaker.xyz",
        launchDate: "2023-01-01",
        tags: ["Creation", "Tool", "Art"],
      },
      {
        id: "arepunksded",
        name: "Are Punks Ded?",
        description: "Answering the question on everyone's mind.",
        thumbnail: "https://pbs.twimg.com/profile_images/1712093315795972097/ebLlmr2M_400x400.jpg",
        url: "https://arepunksded.com",
        launchDate: "2023-10-01",
        tags: ["Community", "Fun"],
      },
    ],
  },

  // Community Tools & Wrappers
  2: {
    id: 2,
    name: "Niftynaut",
    twitter: "niftynaut",
    projects: [
      {
        id: "punks-wrapper",
        name: "Punks Wrapper",
        description:
          "A simpler interface for the WrappedPunks smart contract.",
        thumbnail: "https://app.swap.kiwi/SwapKiwiCover.png",
        url: "https://punks.swap.kiwi",
        launchDate: "2021-01-01",
        tags: ["Wrapper", "ERC-721", "DeFi"],
      },
      {
        id: "punks-wtf",
        name: "Punks.wtf",
        description: "Explore punks colors and attributes visually.",
        thumbnail: "https://pbs.twimg.com/profile_images/1648319453627547648/aKNoQe0Q_400x400.jpg",
        url: "https://punks.wtf",
        launchDate: "2022-01-01",
        tags: ["Explorer", "Colors", "Traits"],
      },
    ],
  },

  // Wrapped Punks
  3: {
    id: 3,
    projects: [
      {
        id: "wrapped-punks",
        name: "Wrapped Punks",
        description: "Turn your CryptoPunks into ERC721 tokens.",
        thumbnail: "https://assets.bitdegree.org/crypto-tracker/dapp-logos/ethereum/wrapped-cryptopunks-logo.png",
        url: "https://www.wrappedpunks.com/",
        launchDate: "2020-09-01",
        tags: ["Wrapper", "ERC-721", "DeFi"],
      },
    ],
  },

  // Open Source Community
  4: {
    id: 4,
    name: "Gerald Bauer",
    twitter: "geraldbauer",
    projects: [
      {
        id: "punks-not-dead",
        name: "(Crypto) Punk's Not Dead",
        description:
          "Open Source Tools & Scripts and Public Domain Artwork & Datasets for Punks.",
        thumbnail: "https://avatars.githubusercontent.com/u/79600699?s=200&v=4",
        url: "https://github.com/cryptopunksnotdead",
        launchDate: "2021-01-01",
        tags: ["Open Source", "Tools", "Datasets"],
        github: "https://github.com/cryptopunksnotdead",
      },
    ],
  },

  // Arkaydeus Projects
  5: {
    id: 5,
    name: "Arkaydeus",
    twitter: "arkaydeus",
    projects: [
      {
        id: "punklist",
        name: "PunkList",
        description: "The home of drops and whitelists for Punks.",
        thumbnail: "https://pbs.twimg.com/profile_images/1697283234822758400/rX-XdbHc_400x400.jpg",
        url: "https://www.punklist.xyz/",
        launchDate: "2023-01-01",
        tags: ["Drops", "Whitelists", "Community"],
      },
      {
        id: "nft-meme-generator",
        name: "NFT Meme Generator",
        description: "Create memes with your punks.",
        thumbnail: "https://pbs.twimg.com/profile_images/1697283234822758400/rX-XdbHc_400x400.jpg",
        url: "https://www.nftmeme.pics/punks",
        launchDate: "2023-01-01",
        tags: ["Memes", "Fun", "Creation"],
      },
    ],
  },

  // Pat Doyle Projects
  6: {
    id: 6,
    name: "Pat Doyle",
    twitter: "doyle126",
    projects: [
      {
        id: "punk-provenance",
        name: "Punk Provenance Explorer",
        description:
          "Visualize the provenance of each punk as they move between wallets.",
        thumbnail: "https://pbs.twimg.com/profile_images/1730233044626231296/sYynZCoq_400x400.jpg",
        url: "https://punks.junkdrawer.wtf/",
        launchDate: "2023-01-01",
        tags: ["Provenance", "Visualization", "Data"],
      },
      {
        id: "punkverse",
        name: "PunkVerse",
        description:
          "Visualize the universe of wallets buying/selling/transfering punks.",
        thumbnail: "https://pbs.twimg.com/profile_images/1730233044626231296/sYynZCoq_400x400.jpg",
        url: "https://punkverse.junkdrawer.wtf/",
        launchDate: "2023-01-01",
        tags: ["Visualization", "Network", "Data"],
      },
    ],
  },

  // The Punk Animator
  7: {
    id: 7,
    name: "The Punk Animator",
    twitter: "ThePunkAnimator",
    projects: [
      {
        id: "punk-builder",
        name: "The Punk Builder",
        description: "Build and customize your own punk with animations.",
        thumbnail: "https://pbs.twimg.com/profile_images/1639192482960535558/gsS6wLsG_400x400.jpg",
        url: "https://thepunkanimator.xyz/",
        launchDate: "2023-01-01",
        tags: ["Creation", "Animation", "Tool"],
      },
    ],
  },

  // IttyBits
  8: {
    id: 8,
    name: "Jeremy.eth",
    twitter: "posvar",
    projects: [
      {
        id: "ittybits",
        name: "IttyBits",
        description:
          "Each Cryptopunk constrained to 12x12 pixels, retaining original IDs and traits.",
        thumbnail: "https://ittybits.xyz/ittybits.png",
        url: "https://ittybits.xyz/",
        launchDate: "2022-01-01",
        tags: ["Derivative", "Art", "Pixels"],
      },
    ],
  },

  // Documentaries - Sherone
  9: {
    id: 9,
    name: "Sherone.eth",
    twitter: "Sherone33",
    projects: [
      {
        id: "cryptopunks-origins",
        name: "CryptoPunks Origins",
        description:
          "Chronicles the life and evolution of the CryptoPunks project.",
        thumbnail: "https://pbs.twimg.com/profile_images/1661814409537224713/T1Rl7eyd_400x400.jpg",
        url: "https://cryptopunksorigins.com/",
        launchDate: "2023-01-01",
        tags: ["Documentary", "Film", "History"],
      },
      {
        id: "punk-secrets",
        name: "Punk Secrets",
        description: "Find out what your punk is hiding.",
        thumbnail: "https://pbs.twimg.com/profile_images/1661814409537224713/T1Rl7eyd_400x400.jpg",
        url: "https://punksecrets.art/",
        launchDate: "2023-01-01",
        tags: ["Documentary", "Mystery", "Art"],
      },
    ],
  },

  // What The Punk Documentary
  10: {
    id: 10,
    name: "Hervé Martin-Delpierre",
    twitter: "MartinDelpierre",
    projects: [
      {
        id: "what-the-punk",
        name: "What The Punk",
        description:
          "Independent documentary on the amazing destiny of CryptoPunks and the crypto-art scene.",
        thumbnail: "https://pbs.twimg.com/profile_images/1728116867191934976/OKnCNSFT_400x400.jpg",
        url: "https://twitter.com/WTP_Movie",
        launchDate: "2023-01-01",
        tags: ["Documentary", "Film", "Culture"],
        twitter: "WTP_Movie",
      },
    ],
  },

  // NFT Now Series
  11: {
    id: 11,
    name: "NFT Now",
    twitter: "nftnow",
    projects: [
      {
        id: "punks-as-told",
        name: "Punks As Told By CryptoPunks",
        description:
          "Exclusive interviews with pioneers and influencers who shaped CryptoPunks history.",
        thumbnail: "https://nftnow.com/wp-content/uploads/2023/09/cryptopunks-thumbnail.jpg",
        url: "https://nftnow.com/punks-as-told-by-cryptopunks/",
        launchDate: "2023-09-01",
        tags: ["Documentary", "Interviews", "Media"],
      },
    ],
  },

  // Community Projects
  12: {
    id: 12,
    name: "Sean Bonner",
    twitter: "seanbonner",
    projects: [
      {
        id: "burned-punks",
        name: "Burned Punks",
        description: "There were 10,000 Cryptopunks. 9,988 remain.",
        thumbnail: "https://pbs.twimg.com/profile_images/1719568886130245632/jjwZHHAm_400x400.jpg",
        url: "https://burnedpunks.com",
        launchDate: "2023-01-01",
        tags: ["Community", "Tracker", "History"],
      },
    ],
  },

  // ForeverPunks
  13: {
    id: 13,
    name: "Mr Forever",
    twitter: "mrforevernft",
    projects: [
      {
        id: "foreverpunks",
        name: "ForeverPunks",
        description: "Find your Forever Punk.",
        thumbnail: "https://cdn.punksclub.io/media/avatars/-pbFDj9HdjLw4KmXYQcAdw.png.500x500_q99_crop-smart.jpg",
        url: "https://foreverpunks.com/",
        launchDate: "2023-01-01",
        tags: ["Community", "Identity"],
      },
    ],
  },

  // Education
  14: {
    id: 14,
    name: "Jalil",
    twitter: "jalil_eth",
    projects: [
      {
        id: "understanding-cryptopunks",
        name: "Understanding CryptoPunks",
        description:
          "A little guide that explores the wild phenomenon of CryptoPunks.",
        thumbnail: "https://pbs.twimg.com/profile_images/1755582763745292288/APKWetyO_400x400.jpg",
        url: "https://understanding-cryptopunks.vv.xyz/",
        launchDate: "2024-01-01",
        tags: ["Guide", "Education", "History"],
      },
    ],
  },

  // Cryptopunks.eth.limo
  15: {
    id: 15,
    name: "Beautifulnfts.eth",
    twitter: "beautiful_nfts_",
    projects: [
      {
        id: "cryptopunks-eth-limo",
        name: "Cryptopunks.eth.limo",
        description:
          "A new NFT marketplace dedicated exclusively to the iconic 10,000 CryptoPunks.",
        thumbnail: "https://cryptopunks.eth.limo/favicon.ico",
        url: "https://cryptopunks.eth.limo/",
        launchDate: "2023-01-01",
        tags: ["Marketplace", "ENS", "Trading"],
      },
    ],
  },
};

// Helper functions
export function getAllPunks(): number[] {
  return Object.keys(punksData)
    .map(Number)
    .sort((a, b) => a - b);
}

export function getPunkById(id: number) {
  return punksData[id];
}

export function getAllProjects() {
  return Object.values(punksData).flatMap((punk) =>
    punk.projects.map((project) => ({
      ...project,
      punkId: punk.id,
      punkName: punk.name,
    }))
  );
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  Object.values(punksData).forEach((punk) => {
    punk.projects.forEach((project) => {
      project.tags.forEach((tag) => tags.add(tag));
    });
  });
  return Array.from(tags).sort();
}

export function getProjectsByTag(tag: string) {
  return getAllProjects().filter((project) =>
    project.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}
