import React, { FC } from 'react';
import cn from 'classnames';

import styles from './Contacts.module.scss';
import SectionTitle from '@components/ui/SectionTitle';
import getContactIcon from '@utils/getContactIcon';
import { IContacts } from 'types/contentful';

interface Props {
  data: IContacts;
}

const Contacts: FC<Props> = ({ data }) => {
  return (
    <section className={styles.wrapper} id="contacts">
      <div className={cn('container', styles.container)}>
        <SectionTitle>Contacts</SectionTitle>

        <p className={styles.text}>You can find me here:</p>
        <a href={`mailto:${data.fields.email}`} className={cn(styles.text, styles.link)}>
          {data.fields.email}
        </a>

        {data.fields.cvVisible && data.fields.cv && (
          <a
            href={data.fields.cv}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(styles.text, styles.link)}
          >
            CV
          </a>
        )}

        {data.fields?.links && (
          <div className={styles.buttons}>
            {data.fields.links.map((link) => (
              <a
                href={link.fields.link}
                target="_blank"
                rel="noopener noreferrer"
                key={link.sys.id}
                className={styles.btn}
                aria-label={link.fields.name}
              >
                {getContactIcon(link.fields.name)}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Contacts;
