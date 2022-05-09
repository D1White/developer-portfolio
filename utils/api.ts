import client from '@utils/contentful-client';
import { IQuery } from 'types/contentful/query';

import { ISkillsFields, IProjectFields, IContactsFields } from 'types/contentful';

export const getSkills = async () => {
  const query: IQuery = {
    content_type: 'skills',
    order: 'sys.createdAt',
  };

  try {
    const res = await client.getEntries<ISkillsFields>(query);
    return res.items;
  } catch (error) {
    console.error(JSON.stringify(error));
    return undefined;
  }
};

export const getProjects = async () => {
  const query: IQuery = {
    content_type: 'project',
    order: '-sys.createdAt',
  };

  try {
    const res = await client.getEntries<IProjectFields>(query);
    return res.items;
  } catch (error) {
    console.error(JSON.stringify(error));
    return undefined;
  }
};

export const getContacts = async () => {
  const query: IQuery = {
    content_type: 'contacts',
    limit: 1,
  };

  try {
    const res = await client.getEntries<IContactsFields>(query);
    return res.items[0];
  } catch (error) {
    console.error(JSON.stringify(error));
    return undefined;
  }
};
