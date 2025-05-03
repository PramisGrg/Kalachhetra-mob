import {useQuery} from '@tanstack/react-query';
// import {TArtsFilterSchema} from '../../../../schemas/art/art.filter.schema';
import axiosInstance from '../../../axios/axios.instance';
import * as T from '../../../../types/index';

// type TGetArtsProps = TArtsFilterSchema;
// export const useGetArtsQuery = (getArtsProps: TGetArtsProps) => {
//   const {search, priceRange, shippingOption, sizes, categoryId, sort, orderBy} =
//     getArtsProps;
//   const getArtsQuery = useQuery({
//     queryKey: [
//       search,
//       priceRange,
//       shippingOption,
//       sizes,
//       categoryId,
//       sort,
//       orderBy,
//     ],
//     queryFn: async () => {
//       const response = await axiosInstance.get(T.Routes.BEEndpoints.ARTS, {
//         params: getArtsProps,
//       });
//       return response.data;
//     },
//   });

//   return getArtsQuery;
// };

export const useGetArtsQuery = () => {
  const getArtsQuery = useQuery({
    queryKey: ['all-arts'],
    queryFn: async () => {
      const response = await axiosInstance.get(T.Routes.BEEndpoints.ARTS);
      return response.data;
    },
  });

  return getArtsQuery;
};
