import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, UseFormReturn, SubmitHandler, UseFormProps, FieldValues } from 'react-hook-form'
import { ZodType, ZodTypeDef } from 'zod'

type FormProps<TFormValues extends FieldValues, Schema> = {
  id?: string
  onSubmit: SubmitHandler<TFormValues>
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode
  options?: UseFormProps<TFormValues>
  schema?: Schema
  className?: string
}

export const Form = <
  TFormValues extends Record<string, unknown> = Record<string, unknown>,
  Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<unknown, ZodTypeDef, unknown>
>({
  id,
  onSubmit,
  children,
  options,
  schema,
  className,
}: FormProps<TFormValues, Schema>) => {
  const methods = useForm<TFormValues>({
    ...options,
    resolver: schema && zodResolver(schema),
  })

  return (
    <form className={className} onSubmit={methods.handleSubmit(onSubmit)} id={id}>
      {children(methods)}
    </form>
  )
}
