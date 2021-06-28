import PropTypes from 'prop-types';
import React from 'react';
import { Form } from '@freecodecamp/react-bootstrap';
import { useTranslation } from 'react-i18next';

import ToggleSetting from './ToggleSetting';

const propTypes = {
  sound: PropTypes.bool.isRequired,
  toggleSoundMode: PropTypes.func.isRequired
};

export default function SoundSettings({ sound, toggleSoundMode }) {
  const { t } = useTranslation();

  return (
    <Form inline={true} onSubmit={e => e.preventDefault()}>
      <ToggleSetting
        action={t('settings.labels.sound-mode')}
        flag={sound}
        flagName='sound'
        offLabel={t('buttons.off')}
        onLabel={t('buttons.on')}
        toggleFlag={() => {
          toggleSoundMode(sound ? false : true);
        }}
      />
    </Form>
  );
}

SoundSettings.displayName = 'SoundSettings';
SoundSettings.propTypes = propTypes;
