import { List, ListItem, ListItemText } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useHomeStyles from '../pages/Home/useHomeStyles';
import { fetchTopics } from '../store/ducks/topics/actionCreators';
import { selectIsTopicsLoading, selectTopicsItems } from '../store/ducks/topics/selectors';
import LoadingCircle from './LoadingCircle';

interface ITopicsProps {}

const Topics: React.FC<ITopicsProps> = () => {
  const s = useHomeStyles();

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsTopicsLoading);
  const topics = useSelector(selectTopicsItems);

  useEffect(() => {
    dispatch(fetchTopics());
  }, [dispatch]);

  return (
    <Paper className={s.recommendations}>
      <Typography variant="h6" className={s.recommendationsTitle}>
        Актуальные темы
      </Typography>
      {isLoading ? (
        <LoadingCircle />
      ) : (
        <>
          <List style={{ padding: 0 }}>
            {topics.map((topic) => (
              <Link to={`/home/search?q=${topic.name}`} key={topic._id}>
                <ListItem className={s.recomItem} button>
                  <ListItemText
                    primary={<Typography className={s.recomItemTitle}>{topic.name}</Typography>}
                    secondary={
                      <Typography className={s.recomItemText}>Твитов: {topic.tweets}</Typography>
                    }
                  />
                </ListItem>
              </Link>
            ))}
          </List>
          <Paper className={s.recomLoadMore}>
            <Typography className={s.recomLoadMoreText}>Показать еще</Typography>
          </Paper>
        </>
      )}
    </Paper>
  );
};

export default Topics;
