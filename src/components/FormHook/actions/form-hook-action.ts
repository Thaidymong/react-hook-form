// 'use server';

// import { EventRegistrationDocument, EventRegistrationInput } from '@/__generated__/graphql';
// import { client } from '@/lib/apollo/server';
// import { GraphQLError } from 'graphql';
// import { revalidatePath } from 'next/cache';

// export const EventRegistration = async (input: EventRegistrationInput) => {
//   try {
//     const { data, errors } = await client.mutate({
//       mutation: EventRegistrationDocument,
//       variables: {
//         input,
//       },
//       fetchPolicy: 'no-cache',
//     });

//     if (errors) {
//       const error = errors[0];
//       return {
//         error: {
//           message: error.message,
//           extensions: {
//             code: error.extensions?.code,
//             statusCode: 401,
//           },
//         },
//         data: null,
//       };
//     }

//     revalidatePath('/');
//     return {
//       error: null,
//       data: data?.eventRegistration?.data,
//     };
//   } catch (error) {
//     let errorMessage = 'An unknown error occurred';
//     let statusCode = null;
//     let code = 'ERROR_CODE';

//     if (error instanceof Error) {
//       errorMessage = error.message;
//     }
//     if (error instanceof GraphQLError) {
//       errorMessage = error.message;
//     }

//     if (typeof error === 'object' && error !== null && 'name' in error && 'networkError' in error) {
//       const networkError = error as { name: string; networkError: { statusCode: number } };
//       if (networkError.name === 'NetworkError') {
//         statusCode = networkError.networkError.statusCode;
//         if (statusCode === 429) {
//           errorMessage = 'You have exceeded the request limit, please try again later';
//           code = 'TOO_MANY_REQUESTS';
//         }
//       }
//     }

//     return {
//       error: {
//         message: errorMessage,
//         extensions: {
//           code,
//           statusCode,
//         },
//       },
//       data: null,
//     };
//   }
// };
