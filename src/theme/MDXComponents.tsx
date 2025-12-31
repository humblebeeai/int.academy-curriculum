import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import AutoIcon from '@site/src/components/AutoIcon';
// Import icons directly to expose them to MDX if needed manually
import { CheckCircle2, XCircle, MapPin, Library, Rocket, Lightbulb, Target, School, Settings, FileText } from 'lucide-react';

export default {
    // Re-use the default mapping
    ...MDXComponents,

    // Intercept list items
    li: (props) => <AutoIcon as="li" originalType="li" {...props} />,

    // Intercept headers (optional, mostly useful if users use emojis in titles)
    // We avoid h1 as it's usually the page title and handled separately
    h2: (props) => <AutoIcon as="h2" originalType="header" {...props} />,
    h3: (props) => <AutoIcon as="h3" originalType="header" {...props} />,

    // Expose specific icons for manual use in MDX
    AutoIcon, // Needed for remark-emoji plugin injections
    Icon: AutoIcon, // Generic usage <Icon>✅ Some text</Icon>
    CheckCircle2,
    XCircle,
    MapPin,
    Library,
    Rocket,
    Lightbulb,
    Target,
    School,
    Settings,
    FileText,
};
