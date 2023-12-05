export type Props<T> = {
  items: readonly T[]
  onClick: (value: number) => void
}

export default function InteractionsList2<
  T extends { value: number; image: string }
>({ items, onClick }: Props<T>) {
  return items.map((item, index) => (
    <div key={index} onClick={() => onClick(item.value)}>
      {/*TODO: Display content of an item */}
    </div>
  ))
}
