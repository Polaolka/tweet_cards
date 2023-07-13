export const selectAllUsers = state => state.user.users;
export const selectFavUsers = state => state.user.favoriteUsers;
export const selectuserById = state => state.user.user;
export const selectError = state => state.user.error;
export const selectTweetsCategory = state => state.user.select;
export const selectCurrentPage = state => state.user.currentPage;
export const selectIsLoadinggetAllUsers = state => state.user.isLoadinggetAllUsers;