import React, { useEffect, useState } from 'react';
import {
  FlatList,
  ImageBackground,
  TextInput,
  View,
  Text,
  Button,
} from 'react-native';
import styles from '../createMessage/createMessage_style';
import backgroundImg from '../../../assets/forum/background.png'; // 假设这是您的背景图片路径

// 假设的API URL，您需要根据实际情况进行替换
const apiUrl = 'https://example.com/api/comments';

function CreateComment() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const data = await response.json();
          setComments(data.comments); // Assuming the backend returns data structure is { comments: [] }
        } else {
          console.error('Failed to fetch comments');
        }
      } catch (error) {
        console.error('Failed to fetch comments', error);
      }
    };

    fetchComments();
  }, []);

  const postComment = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment: newComment }),
      });

      if (response.ok) {
        const newCommentFromResponse = await response.json(); // Assuming the backend returns the new comment
        setComments([...comments, newCommentFromResponse]);
        setNewComment('');
      } else {
        console.error('Failed to post comment');
      }
    } catch (error) {
      console.error('Failed to post comment', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ImageBackground
        source={backgroundImg}
        style={styles.bk}
      >
        <FlatList
          data={comments}
          renderItem={({ item }) => <Text>{item.comment}</Text>} // Assuming each comment object has a comment property
          keyExtractor={(item, index) => index.toString()}
        />
        <TextInput
          value={newComment}
          onChangeText={setNewComment}
          placeholder="写评论..."
          style={{ margin: 10 }} // Add some basic styling for visibility
        />
        <Button title="发布评论" onPress={postComment} />
      </ImageBackground>
    </View>
  );
}

export default CreateComment;

