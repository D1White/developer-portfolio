import telegramIcon from '@svg/telegram.svg';
import githubIcon from '@svg/github.svg';
import behanceIcon from '@svg/behance.svg';
import habrIcon from '@svg/habr.svg';
import linkedinIcon from '@svg/linkedin.svg';

const contactIcons: { [key: string]: JSX.Element } = {
  telegram: telegramIcon(),
  github: githubIcon(),
  behance: behanceIcon(),
  habr: habrIcon(),
  linkedin: linkedinIcon(),
};

const getContactIcon = (name: string) => {
  return contactIcons[name.toLowerCase()];
};

export default getContactIcon;
