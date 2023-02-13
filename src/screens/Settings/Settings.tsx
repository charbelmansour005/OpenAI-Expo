import { View } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { useAppDispatch } from '../../redux/hooks';
import { defaultAuth } from '../../redux/auth/authSlice';
import { clearKeychain } from '../../helpers/keychain/keychainHelpers';

const Settings = () => {
  const dispatch = useAppDispatch();
  const handleLogout = async () => {
    dispatch(defaultAuth());
    await clearKeychain();
  };

  return (
    <View>
      <Button
        mode="elevated"
        onPress={handleLogout}
      >
        Logout
      </Button>
    </View>
  );
};

export default Settings;
