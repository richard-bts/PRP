import ActiveLink from "./ActiveLink"

export const Links = ({ navItems, classStyles }) => {
  return (
    <>    
      {
        navItems.map(({ to, label }) => (
          <ActiveLink
            key={ label }
            href={ to }
            label={ label }
            stylesClass={ classStyles }
          />
        ))
      }
    </>
  )
}
