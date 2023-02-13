import { View, Text } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { defaultAuth } from '../../redux/auth/authSlice';
import { clearKeychain } from '../../helpers/keychain/keychainHelpers';

const Settings = () => {
  const { email } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();
  const handleLogout = async () => {
    dispatch(defaultAuth());
    await clearKeychain();
  };

  // Zedet hay bas kermel l logout bshila eza ma2ela 3aze later
  // Zabbeta however u like

  return (
    <View style={{ flex: 1, backgroundColor: '#1f1f1f' }}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'white' }}>{email}</Text>
      </View>
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
