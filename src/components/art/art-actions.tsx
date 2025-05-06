import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Bookmark, Heart, MessageCircle} from 'lucide-react-native';
import spacing from '../../theme/spacing';

interface ArtActionsProps {
  likeCount: number;
  commentCount: number;
}

const ArtActions = ({likeCount, commentCount}: ArtActionsProps) => {
  return (
    <View style={styles.artActionsContainer}>
      <TouchableOpacity style={styles.artActions}>
        <Heart />
        <Text>{likeCount}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.artActions}>
        <MessageCircle />
        <Text>{commentCount}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.artActions}>
        <Bookmark />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  artActionsContainer: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  artActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
});

export default ArtActions;
