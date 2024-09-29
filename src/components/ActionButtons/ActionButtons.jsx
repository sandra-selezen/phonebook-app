import PropTypes from 'prop-types';
import { IconButton, Flex } from '@chakra-ui/react';
import { RiUserSettingsFill, RiUserUnfollowFill } from '@remixicon/react';

export const ActionButtons = ({ onDelete, onEdit }) => {
  return (
    <Flex columnGap={'12px'}>
      <IconButton
        title='Edit contact'
        aria-label='Edit contact'
        icon={<RiUserSettingsFill />}
        onClick={onEdit}
      />

      <IconButton
        title='Delete contact'
        aria-label='Delete contact'
        icon={<RiUserUnfollowFill />}
        onClick={onDelete}
      />
    </Flex>
  )
}

ActionButtons.propTypes = {
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
}
