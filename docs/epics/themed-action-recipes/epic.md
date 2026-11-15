# Theme-aware action recipes

The landing migration needs existing Button/ActionLink recipes to honor the supplied ThemeProvider. Current recipes embed the library singleton and ignore supported consumer theme overrides. Direct visual impact is limited to adopting consumers; default recipes must keep equivalent values. No new component, prop, public export or package publication is authorized. Preserve shape, loading, keyboard, focus and disabled behavior.
