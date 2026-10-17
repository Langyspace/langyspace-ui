# Ações, campos e formulários

Escolha pelo papel: Button executa, ActionLink navega, IconButton executa com glyph, Pressable sustenta uma receita específica. TextInput/SelectInput/TextareaInput são nativos; FieldRoot fornece identificação/feedback e CompoundControl fornece a superfície composta. Estado e regras permanecem no produto.

## Composição recomendada

```tsx
import {
  Button,
  FieldRoot,
  FormActions,
  FormStack,
  TextInput,
} from '@langyspace/ui'

interface NameFormProps {
  name: string
  onNameChange: (name: string) => void
  onSave: () => void
  saving: boolean
  error?: string
}

export function NameForm({
  name,
  onNameChange,
  onSave,
  saving,
  error,
}: NameFormProps) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        onSave()
      }}
    >
      <FormStack>
        <FieldRoot controlId="name" label="Nome" error={error}>
          <TextInput
            value={name}
            onChange={(event) => onNameChange(event.target.value)}
            autoComplete="name"
          />
        </FieldRoot>
        <FormActions>
          <Button type="submit" isLoading={saving}>
            Salvar
          </Button>
        </FormActions>
      </FormStack>
    </form>
  )
}
```

O exemplo mostra a anatomia; os tipos de domínio e callbacks são definidos pelo produto. É possível entender o formulário sem um schema de renderização, props de layout específicas ou um wrapper para cada botão.

## Relação entre os contextos

FieldRoot compõe o nome/feedback e mescla IDREFs. CompoundControl determina disabled/invalid/size para os três controles compatíveis; os atributos e refs continuam no elemento nativo. A resolução é compartilhada pelo hook interno useFieldControl, sem mudar os contratos públicos. FileInput mantém sua anatomia própria e altura fixa.

## ActionLink

Navegação com aparência de ação. É uma âncora com href obrigatório; o produto integra seu Router sem perder o elemento nativo.

Contrato: variant, size, density, fullWidth, iconStart/iconEnd e children.

Cuidados: Usar Button para comandos; não interceptar navegação sem preservar teclado e abrir em nova aba.

## Button

Comando rotulado, com variantes de ação e texto e type button seguro por padrão.

Contrato: variant, size, density, fullWidth, iconStart/iconEnd, isLoading e children.

Cuidados: Durante loading mantém o rótulo e bloqueia cliques. Submit exige type="submit"; glyph isolado usa IconButton.

Escolha a aparência com props do mesmo componente:

```tsx
<Button variant="primary">Continuar</Button>
<Button variant="secondary">Cancelar</Button>
<Button variant="text">Editar detalhes</Button>
<Button variant="text-subtle">Limpar filtros</Button>
<Button variant="text-danger">Remover item</Button>
```

Os variants de texto mantêm altura intrínseca e herdam a tipografia do contexto;
size e density dimensionam os variants de ação com caixa. fullWidth continua
disponível. Não adicionar um componente público para uma nova cor ou hierarquia.

## Checkbox

Seleção booleana com input checkbox nativo. O produto fornece checked/defaultChecked e label associado.

Contrato: Atributos/ref de input, exceto type.

Cuidados: Não simular checked apenas por cor ou substituir o label por um ícone sem nome acessível.

## ChoiceCard

Escolha rica apresentada como botão com espaço para conteúdo composto, usada em seleção de períodos.

Contrato: children e atributos/ref de button.

Cuidados: O consumidor fornece aria-pressed quando houver seleção. Não transformar uma escolha rica em formulário ou absorver regras de disponibilidade.

## CompoundControl

Superfície única de campo com regiões de adorno e contexto compartilhado para TextInput/SelectInput/TextareaInput.

Contrato: leading decorativo, trailing, disabled, invalid, size, surface e children.

Cuidados: leading é aria-hidden e não recebe controles interativos; ações acessíveis pertencem a trailing. O contexto determina size/disabled/invalid dos campos compatíveis.

## ControlledField

Adaptador de apresentação para um campo de react-hook-form. Mantém FieldRoot/TextInput e a validação fornecida pelo produto.

Contrato: name tipado, rules, label, hint, error, controlId, labelVariant e props de TextInput.

Cuidados: Usar dentro de FormProvider; regras e envio ficam no produto. Para controles sem react-hook-form, compor FieldRoot diretamente.

## FieldCounter

Contagem ou ajuda curta alinhada à identificação de um campo. Não calcula limites ou restante.

Contrato: children e atributos/ref de span.

Cuidados: O consumidor calcula e associa a descrição quando necessária; não comunicar erro somente pela contagem ou cor.

## FieldLabelRow

Linha de conteúdo rico para label, metadados e contador; conserva alinhamento de baseline.

Contrato: children e atributos/ref de span.

Cuidados: É um span de apresentação, não um label automático. A associação ao input pertence ao label/FieldRoot do consumidor.

## FieldRoot

Anatomia de campo com label, hint e erro; fornece id, aria-describedby e estado inválido aos campos compatíveis.

Contrato: label, controlId, hint, error, labelVariant e children.

Cuidados: Id explícito do campo deve coincidir com controlId. Não duplicar o texto de erro em outro alerta; os IDREFs do consumidor são preservados sem duplicação.

## FileInput

Seletor nativo de arquivo com receita única de 48px e integração com FieldRoot.

Contrato: Atributos/ref de input file, sem value/defaultValue/type/size/children.

Cuidados: Arquivos e upload pertencem ao produto. Não tentar controlar o valor nativo por string ou criar size para pequenas diferenças de tela.

## FormActions

Grupo de ações de formulário alinhado ao fim, com quebra e empilhamento em telas estreitas.

Contrato: children e atributos/ref de div.

Cuidados: Até 900px empilha e faz os buttons ocuparem a largura. Ordem e type das ações são decididos no formulário; não substituir por flags de produto.

## FormError

Mensagem de erro de formulário com apresentação de erro e role alert estável.

Contrato: children e atributos/ref de p, exceto role.

Cuidados: Fornecer erro público compreensível; não exibir diagnósticos de provider nem usar o componente como aviso informativo genérico.

## FormStack

Ritmo vertical compartilhado entre campos de formulário, com conteúdo aberto.

Contrato: children e atributos/ref de div.

Cuidados: O elemento form e seu submit são externos. Preservar este papel específico sem evoluir para um gerador de formulários por configuração.

## IconButton

Comando de um glyph, com nome acessível obrigatório e receita de ação por intenção.

Contrato: aria-label ou aria-labelledby, variant, size, shape, isLoading e children.

Cuidados: Não usar sem nome acessível nem aplicar cor/borda/hover local; escolher a variante existente. O ref aponta para o button.

## PhoneField

Campo de telefone com seleção e busca de país, rótulo, erro e ref no input. A formatação e o país selecionado são controlados pelo produto.

Contrato: countries, country, onCountryChange, label, errorMessage e atributos de input.

Cuidados: Não normaliza telefones nem autentica. Busca não submete o formulário; setas/Home/End navegam opções e Escape/seleção retornam foco ao seletor.

## Pressable

Base nativa de comando para receitas específicas, com reset mínimo, foco e type button padrão.

Contrato: Atributos/ref de button.

Cuidados: Usar uma receita semântica existente para botões comuns; não recriar a pele de Button a partir desta base.

## RadioButton

Escolha única com input radio nativo e seleção agrupada pelo name do produto.

Contrato: Atributos/ref de input, exceto type.

Cuidados: Preservar name/value e label nativos; não usar vários radios sem grupo para representar seleção exclusiva.

## SearchInput

Busca com superfície comum, ícone decorativo e limpeza opcional que devolve foco ao input.

Contrato: Nome acessível, size, surface, value, clearLabel/onClear e atributos/ref de input.

Cuidados: className pertence à superfície e ref ao input. Novo uso fornece clearLabel junto de onClear; a omissão histórica mantém compatibilidade, documentada no tipo SearchInputClearAction.

## SelectInput

Select nativo com receita de campo e integração aos contextos FieldRoot/CompoundControl.

Contrato: size e atributos/ref de select; opções são children nativos.

Cuidados: Não mover enums, carregamento ou regras para o componente. CompoundControl determina o size quando presente.

## TextButton

Adaptador de compatibilidade para Button; não possui uma segunda receita visual.

Contrato: variant emphasized/subtle/danger, iconStart/iconEnd, children e atributos/ref nativos.

Novos usos preferem Button: emphasized corresponde a text, subtle a text-subtle
e danger a text-danger. O adaptador mantém atributos, ref, ícones diretos,
data-variant e composição styled(TextButton) existentes. Navegação usa ActionLink
ou âncora semântica.

## TextInput

Input nativo com receita de campo e integração aos contextos de identificação e superfície.

Contrato: size e atributos/ref de input.

Cuidados: Conservar type/inputMode/autocomplete do domínio no produto. Campo fora dos contextos continua funcional com seus atributos explícitos.

## TextareaInput

Área de texto nativa com receita de campo, resize vertical e integração aos contextos.

Contrato: size e atributos/ref de textarea.

Cuidados: Manter tamanho mínimo e comportamento multiline; não usar TextInput com flags para representar textarea.

## ToggleButton

Alternância compacta em formato pill, usada em seleções como os dias disponíveis.

Contrato: children e atributos/ref de button.

Cuidados: Fornecer aria-pressed e o callback controlado. Não unificar com ChoiceCard por uma flag de densidade: suas anatomias e espaços são diferentes.
