import { Box, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'

import { ActionCard, Loader } from 'shared/components'
import { TextFormField } from 'shared/form'

import { useDummyProductsQuery } from 'features/state'

import defaultStyles from './styles'

export function Dashboard() {
  const { data, isFetching } = useDummyProductsQuery()

  const { control } = useForm({
    defaultValues: {
      test: 'Test Value',
    },
  })

  return (
    <Box>
      <Box sx={{ mx: 2, my: 4, display: 'flex', gap: 2 }}>
        <TextField
          label="Chat Label"
          placeholder="Start typing here..."
          helperText="Error message"
        />
        <TextFormField label="From Text Field" control={control} name="test" />
      </Box>

      <Loader csx={{ wrapper: defaultStyles.wrapper }} loading={isFetching}>
        {data?.products.map(({ id, title, description, images }) => (
          <ActionCard
            key={id}
            title={title}
            description={description}
            image={images[0]}
            csx={{ wrapper: { zoom: 0.6 } }}
          />
        ))}
      </Loader>
    </Box>
  )
}
